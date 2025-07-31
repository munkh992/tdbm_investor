-- AI Insights Database Schema

CREATE DATABASE IF NOT EXISTS ai_insights;
USE ai_insights;

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    color VARCHAR(7) DEFAULT '#3b82f6',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Posts table
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content LONGTEXT NOT NULL,
    excerpt TEXT,
    author VARCHAR(100) NOT NULL,
    category_id INT,
    featured BOOLEAN DEFAULT FALSE,
    published BOOLEAN DEFAULT TRUE,
    views INT DEFAULT 0,
    image_url VARCHAR(500),
    read_time INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Tags table
CREATE TABLE IF NOT EXISTS tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Post tags junction table
CREATE TABLE IF NOT EXISTS post_tags (
    post_id INT,
    tag_id INT,
    PRIMARY KEY (post_id, tag_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    interests VARCHAR(255),
    unsubscribe_token VARCHAR(64) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP NULL
);

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

-- Analytics table
CREATE TABLE IF NOT EXISTS analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL,
    event_data JSON,
    page_url VARCHAR(500),
    user_agent TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data
INSERT INTO categories (name, slug, description, color) VALUES
('Machine Learning', 'machine-learning', 'Algorithms and techniques for automated learning', '#3b82f6'),
('Deep Learning', 'deep-learning', 'Neural networks and advanced architectures', '#10b981'),
('Computer Vision', 'computer-vision', 'Image recognition and visual AI', '#8b5cf6'),
('NLP', 'nlp', 'Natural language processing and understanding', '#f59e0b'),
('AI Ethics', 'ai-ethics', 'Responsible AI development and deployment', '#ef4444'),
('AI Research', 'ai-research', 'Latest breakthroughs and developments', '#06b6d4'),
('MLOps', 'mlops', 'Machine learning operations and deployment', '#84cc16'),
('Quantum AI', 'quantum-ai', 'Quantum computing and machine learning', '#a855f7');

INSERT INTO tags (name, slug) VALUES
('Neural Networks', 'neural-networks'),
('TensorFlow', 'tensorflow'),
('PyTorch', 'pytorch'),
('OpenAI', 'openai'),
('Transformers', 'transformers'),
('Computer Vision', 'computer-vision'),
('NLP', 'nlp'),
('Ethics', 'ethics'),
('Research', 'research'),
('Python', 'python'),
('JavaScript', 'javascript'),
('API', 'api'),
('Cloud', 'cloud'),
('Docker', 'docker'),
('Kubernetes', 'kubernetes'),
('Data Science', 'data-science'),
('Statistics', 'statistics'),
('Mathematics', 'mathematics'),
('Algorithms', 'algorithms'),
('Programming', 'programming');

-- Sample posts
INSERT INTO posts (title, slug, content, excerpt, author, category_id, featured, image_url, read_time) VALUES
('Understanding Neural Networks', 'understanding-neural-networks', 'A comprehensive guide to neural networks...', 'Learn the fundamentals of neural networks and how they work.', 'Dr. Sarah Johnson', 1, TRUE, 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop', 8),
('Deep Learning with TensorFlow', 'deep-learning-tensorflow', 'Complete tutorial on deep learning using TensorFlow...', 'Master deep learning concepts with practical TensorFlow examples.', 'Prof. Michael Chen', 2, TRUE, 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop', 12),
('Computer Vision Applications', 'computer-vision-applications', 'Real-world applications of computer vision...', 'Explore how computer vision is transforming industries.', 'Dr. Emily Rodriguez', 3, FALSE, 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop', 10);

-- Link posts to tags
INSERT INTO post_tags (post_id, tag_id) VALUES
(1, 1), (1, 10), (1, 19),
(2, 1), (2, 2), (2, 10),
(3, 6), (3, 10), (3, 16);