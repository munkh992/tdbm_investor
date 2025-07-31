<?php
// AI Insights - Posts API Endpoint

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration
$db_config = [
    'host' => 'localhost',
    'dbname' => 'ai_insights',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8mb4'
];

// Database connection
try {
    $pdo = new PDO(
        "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset={$db_config['charset']}",
        $db_config['username'],
        $db_config['password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit();
}

// Get request method and parse input
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

// Get query parameters
$id = $_GET['id'] ?? null;
$category = $_GET['category'] ?? null;
$featured = $_GET['featured'] ?? null;
$limit = (int)($_GET['limit'] ?? 10);
$page = (int)($_GET['page'] ?? 1);
$offset = ($page - 1) * $limit;

// Response helper function
function sendResponse($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit();
}

// Validation helper function
function validatePost($data) {
    $errors = [];
    
    if (empty($data['title'])) {
        $errors[] = 'Title is required';
    }
    
    if (empty($data['content'])) {
        $errors[] = 'Content is required';
    }
    
    if (empty($data['author'])) {
        $errors[] = 'Author is required';
    }
    
    if (empty($data['category'])) {
        $errors[] = 'Category is required';
    }
    
    return $errors;
}

// Handle different HTTP methods
switch ($method) {
    case 'GET':
        if ($id) {
            // Get single post
            try {
                $stmt = $pdo->prepare("
                    SELECT p.*, c.name as category_name, 
                           GROUP_CONCAT(t.name) as tags
                    FROM posts p
                    LEFT JOIN categories c ON p.category_id = c.id
                    LEFT JOIN post_tags pt ON p.id = pt.post_id
                    LEFT JOIN tags t ON pt.tag_id = t.id
                    WHERE p.id = ? AND p.published = 1
                    GROUP BY p.id
                ");
                $stmt->execute([$id]);
                $post = $stmt->fetch();
                
                if (!$post) {
                    sendResponse(['error' => 'Post not found'], 404);
                }
                
                // Convert tags string to array
                $post['tags'] = $post['tags'] ? explode(',', $post['tags']) : [];
                
                // Update view count
                $stmt = $pdo->prepare("UPDATE posts SET views = views + 1 WHERE id = ?");
                $stmt->execute([$id]);
                
                sendResponse(['post' => $post]);
                
            } catch (PDOException $e) {
                sendResponse(['error' => 'Database error'], 500);
            }
            
        } else {
            // Get multiple posts
            try {
                $where_conditions = ['p.published = 1'];
                $params = [];
                
                if ($category) {
                    $where_conditions[] = 'c.slug = ?';
                    $params[] = $category;
                }
                
                if ($featured) {
                    $where_conditions[] = 'p.featured = 1';
                }
                
                $where_clause = implode(' AND ', $where_conditions);
                
                // Get total count
                $count_sql = "
                    SELECT COUNT(DISTINCT p.id)
                    FROM posts p
                    LEFT JOIN categories c ON p.category_id = c.id
                    WHERE {$where_clause}
                ";
                $stmt = $pdo->prepare($count_sql);
                $stmt->execute($params);
                $total = $stmt->fetchColumn();
                
                // Get posts
                $sql = "
                    SELECT p.*, c.name as category_name, c.slug as category_slug,
                           GROUP_CONCAT(t.name) as tags
                    FROM posts p
                    LEFT JOIN categories c ON p.category_id = c.id
                    LEFT JOIN post_tags pt ON p.id = pt.post_id
                    LEFT JOIN tags t ON pt.tag_id = t.id
                    WHERE {$where_clause}
                    GROUP BY p.id
                    ORDER BY p.created_at DESC
                    LIMIT ? OFFSET ?
                ";
                
                $params[] = $limit;
                $params[] = $offset;
                
                $stmt = $pdo->prepare($sql);
                $stmt->execute($params);
                $posts = $stmt->fetchAll();
                
                // Process posts
                foreach ($posts as &$post) {
                    $post['tags'] = $post['tags'] ? explode(',', $post['tags']) : [];
                    $post['excerpt'] = substr(strip_tags($post['content']), 0, 200) . '...';
                }
                
                sendResponse([
                    'posts' => $posts,
                    'pagination' => [
                        'current_page' => $page,
                        'per_page' => $limit,
                        'total' => $total,
                        'last_page' => ceil($total / $limit)
                    ]
                ]);
                
            } catch (PDOException $e) {
                sendResponse(['error' => 'Database error'], 500);
            }
        }
        break;
        
    case 'POST':
        // Create new post
        if (!$input) {
            sendResponse(['error' => 'No data provided'], 400);
        }
        
        $errors = validatePost($input);
        if (!empty($errors)) {
            sendResponse(['errors' => $errors], 400);
        }
        
        try {
            $pdo->beginTransaction();
            
            // Insert post
            $stmt = $pdo->prepare("
                INSERT INTO posts (title, content, excerpt, author, category_id, featured, published, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
            ");
            
            $stmt->execute([
                $input['title'],
                $input['content'],
                $input['excerpt'] ?? substr(strip_tags($input['content']), 0, 200),
                $input['author'],
                $input['category_id'],
                $input['featured'] ?? 0,
                $input['published'] ?? 1
            ]);
            
            $post_id = $pdo->lastInsertId();
            
            // Insert tags if provided
            if (!empty($input['tags'])) {
                $tag_stmt = $pdo->prepare("
                    INSERT IGNORE INTO tags (name, slug) VALUES (?, ?)
                ");
                $post_tag_stmt = $pdo->prepare("
                    INSERT INTO post_tags (post_id, tag_id) VALUES (?, ?)
                ");
                
                foreach ($input['tags'] as $tag_name) {
                    $tag_slug = strtolower(str_replace(' ', '-', $tag_name));
                    $tag_stmt->execute([$tag_name, $tag_slug]);
                    
                    // Get tag ID
                    $tag_id_stmt = $pdo->prepare("SELECT id FROM tags WHERE slug = ?");
                    $tag_id_stmt->execute([$tag_slug]);
                    $tag_id = $tag_id_stmt->fetchColumn();
                    
                    // Link post to tag
                    $post_tag_stmt->execute([$post_id, $tag_id]);
                }
            }
            
            $pdo->commit();
            
            sendResponse(['message' => 'Post created successfully', 'id' => $post_id], 201);
            
        } catch (PDOException $e) {
            $pdo->rollback();
            sendResponse(['error' => 'Database error'], 500);
        }
        break;
        
    case 'PUT':
        // Update post
        if (!$id) {
            sendResponse(['error' => 'Post ID required'], 400);
        }
        
        if (!$input) {
            sendResponse(['error' => 'No data provided'], 400);
        }
        
        $errors = validatePost($input);
        if (!empty($errors)) {
            sendResponse(['errors' => $errors], 400);
        }
        
        try {
            $stmt = $pdo->prepare("
                UPDATE posts 
                SET title = ?, content = ?, excerpt = ?, author = ?, 
                    category_id = ?, featured = ?, published = ?, updated_at = NOW()
                WHERE id = ?
            ");
            
            $stmt->execute([
                $input['title'],
                $input['content'],
                $input['excerpt'] ?? substr(strip_tags($input['content']), 0, 200),
                $input['author'],
                $input['category_id'],
                $input['featured'] ?? 0,
                $input['published'] ?? 1,
                $id
            ]);
            
            if ($stmt->rowCount() === 0) {
                sendResponse(['error' => 'Post not found'], 404);
            }
            
            sendResponse(['message' => 'Post updated successfully']);
            
        } catch (PDOException $e) {
            sendResponse(['error' => 'Database error'], 500);
        }
        break;
        
    case 'DELETE':
        // Delete post
        if (!$id) {
            sendResponse(['error' => 'Post ID required'], 400);
        }
        
        try {
            $stmt = $pdo->prepare("DELETE FROM posts WHERE id = ?");
            $stmt->execute([$id]);
            
            if ($stmt->rowCount() === 0) {
                sendResponse(['error' => 'Post not found'], 404);
            }
            
            sendResponse(['message' => 'Post deleted successfully']);
            
        } catch (PDOException $e) {
            sendResponse(['error' => 'Database error'], 500);
        }
        break;
        
    default:
        sendResponse(['error' => 'Method not allowed'], 405);
}
?>