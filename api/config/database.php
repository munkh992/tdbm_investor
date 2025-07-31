<?php
// AI Insights - Database Configuration

class Database {
    private $host = 'localhost';
    private $dbname = 'ai_insights';
    private $username = 'root';
    private $password = '';
    private $charset = 'utf8mb4';
    private $pdo;
    
    public function __construct() {
        try {
            $dsn = "mysql:host={$this->host};dbname={$this->dbname};charset={$this->charset}";
            $this->pdo = new PDO($dsn, $this->username, $this->password, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false
            ]);
        } catch (PDOException $e) {
            throw new Exception('Database connection failed: ' . $e->getMessage());
        }
    }
    
    public function getPDO() {
        return $this->pdo;
    }
    
    public function query($sql, $params = []) {
        try {
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            throw new Exception('Query failed: ' . $e->getMessage());
        }
    }
    
    public function fetch($sql, $params = []) {
        return $this->query($sql, $params)->fetch();
    }
    
    public function fetchAll($sql, $params = []) {
        return $this->query($sql, $params)->fetchAll();
    }
    
    public function execute($sql, $params = []) {
        return $this->query($sql, $params)->rowCount();
    }
}

// Response helper functions
function sendResponse($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit();
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function generateToken($email) {
    return hash('sha256', $email . 'ai_insights_secret_key');
}

function sendWelcomeEmail($email, $name) {
    // Email sending logic here
    error_log("Welcome email sent to: $email ($name)");
    return true;
}
?>