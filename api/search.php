<?php
// AI Insights - Search API Endpoint

require_once 'config/database.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $db = new Database();
    
    if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
        sendResponse(['error' => 'Method not allowed'], 405);
    }
    
    $query = trim($_GET['q'] ?? '');
    $limit = min((int)($_GET['limit'] ?? 10), 50);
    $page = max((int)($_GET['page'] ?? 1), 1);
    $offset = ($page - 1) * $limit;
    
    if (empty($query)) {
        sendResponse(['error' => 'Search query required'], 400);
    }
    
    // Search in posts
    $searchTerm = '%' . $query . '%';
    
    $posts = $db->fetchAll("
        SELECT p.*, c.name as category_name, c.slug as category_slug,
               GROUP_CONCAT(t.name) as tags
        FROM posts p
        LEFT JOIN categories c ON p.category_id = c.id
        LEFT JOIN post_tags pt ON p.id = pt.post_id
        LEFT JOIN tags t ON pt.tag_id = t.id
        WHERE p.published = 1 AND (
            p.title LIKE ? OR 
            p.content LIKE ? OR 
            p.excerpt LIKE ? OR
            p.author LIKE ? OR
            c.name LIKE ? OR
            t.name LIKE ?
        )
        GROUP BY p.id
        ORDER BY 
            CASE 
                WHEN p.title LIKE ? THEN 1
                WHEN p.excerpt LIKE ? THEN 2
                WHEN p.content LIKE ? THEN 3
                ELSE 4
            END,
            p.created_at DESC
        LIMIT ? OFFSET ?
    ", [
        $searchTerm, $searchTerm, $searchTerm, $searchTerm, $searchTerm, $searchTerm,
        $searchTerm, $searchTerm, $searchTerm,
        $limit, $offset
    ]);
    
    // Get total count
    $total = $db->fetch("
        SELECT COUNT(DISTINCT p.id) as count
        FROM posts p
        LEFT JOIN categories c ON p.category_id = c.id
        LEFT JOIN post_tags pt ON p.id = pt.post_id
        LEFT JOIN tags t ON pt.tag_id = t.id
        WHERE p.published = 1 AND (
            p.title LIKE ? OR 
            p.content LIKE ? OR 
            p.excerpt LIKE ? OR
            p.author LIKE ? OR
            c.name LIKE ? OR
            t.name LIKE ?
        )
    ", [$searchTerm, $searchTerm, $searchTerm, $searchTerm, $searchTerm, $searchTerm])['count'];
    
    // Process results
    foreach ($posts as &$post) {
        $post['tags'] = $post['tags'] ? explode(',', $post['tags']) : [];
        $post['excerpt'] = $post['excerpt'] ?: substr(strip_tags($post['content']), 0, 200) . '...';
        
        // Highlight search terms in title and excerpt
        $post['title'] = preg_replace('/(' . preg_quote($query, '/') . ')/i', '<mark>$1</mark>', $post['title']);
        $post['excerpt'] = preg_replace('/(' . preg_quote($query, '/') . ')/i', '<mark>$1</mark>', $post['excerpt']);
    }
    
    // Search suggestions
    $suggestions = $db->fetchAll("
        SELECT DISTINCT name
        FROM tags
        WHERE name LIKE ?
        ORDER BY name
        LIMIT 5
    ", [$searchTerm]);
    
    sendResponse([
        'query' => $query,
        'posts' => $posts,
        'suggestions' => array_column($suggestions, 'name'),
        'pagination' => [
            'current_page' => $page,
            'per_page' => $limit,
            'total' => $total,
            'last_page' => ceil($total / $limit)
        ]
    ]);
    
} catch (Exception $e) {
    sendResponse(['error' => $e->getMessage()], 500);
}
?>