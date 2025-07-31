// AI Insights - API JavaScript File

// API configuration
const API_CONFIG = {
    baseURL: '/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

// API client class
class APIClient {
    constructor(config = {}) {
        this.config = { ...API_CONFIG, ...config };
        this.abortController = new AbortController();
    }
    
    // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.config.baseURL}${endpoint}`;
        const config = {
            headers: { ...this.config.headers, ...options.headers },
            signal: this.abortController.signal,
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const contentType = response.headers.get('content-type');
            
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }
            
            return await response.text();
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Request aborted');
                return null;
            }
            
            console.error('API request failed:', error);
            throw error;
        }
    }
    
    // GET request
    async get(endpoint, params = {}) {
        const url = new URL(`${this.config.baseURL}${endpoint}`, window.location.origin);
        
        Object.keys(params).forEach(key => {
            if (params[key] !== undefined && params[key] !== null) {
                url.searchParams.append(key, params[key]);
            }
        });
        
        return await this.request(url.pathname + url.search, {
            method: 'GET'
        });
    }
    
    // POST request
    async post(endpoint, data = {}) {
        return await this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    // PUT request
    async put(endpoint, data = {}) {
        return await this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    // DELETE request
    async delete(endpoint) {
        return await this.request(endpoint, {
            method: 'DELETE'
        });
    }
    
    // Upload file
    async upload(endpoint, file, additionalData = {}) {
        const formData = new FormData();
        formData.append('file', file);
        
        Object.keys(additionalData).forEach(key => {
            formData.append(key, additionalData[key]);
        });
        
        return await this.request(endpoint, {
            method: 'POST',
            body: formData,
            headers: {} // Don't set Content-Type for FormData
        });
    }
    
    // Cancel all ongoing requests
    abort() {
        this.abortController.abort();
        this.abortController = new AbortController();
    }
}

// Initialize API client
const api = new APIClient();

// API service methods
const APIService = {
    // Posts API
    posts: {
        async getAll(params = {}) {
            return await api.get('/posts.php', params);
        },
        
        async getById(id) {
            return await api.get(`/posts.php?id=${id}`);
        },
        
        async getFeatured(limit = 3) {
            return await api.get('/posts.php', { featured: true, limit });
        },
        
        async getByCategory(category, params = {}) {
            return await api.get('/posts.php', { category, ...params });
        },
        
        async search(query, params = {}) {
            return await api.get('/search.php', { q: query, ...params });
        },
        
        async create(postData) {
            return await api.post('/posts.php', postData);
        },
        
        async update(id, postData) {
            return await api.put(`/posts.php?id=${id}`, postData);
        },
        
        async delete(id) {
            return await api.delete(`/posts.php?id=${id}`);
        }
    },
    
    // Categories API
    categories: {
        async getAll() {
            return await api.get('/categories.php');
        },
        
        async getById(id) {
            return await api.get(`/categories.php?id=${id}`);
        },
        
        async create(categoryData) {
            return await api.post('/categories.php', categoryData);
        },
        
        async update(id, categoryData) {
            return await api.put(`/categories.php?id=${id}`, categoryData);
        },
        
        async delete(id) {
            return await api.delete(`/categories.php?id=${id}`);
        }
    },
    
    // Newsletter API
    newsletter: {
        async subscribe(email, name = '', interests = '') {
            return await api.post('/newsletter.php', {
                action: 'subscribe',
                email,
                name,
                interests
            });
        },
        
        async unsubscribe(email) {
            return await api.post('/newsletter.php', {
                action: 'unsubscribe',
                email
            });
        },
        
        async getSubscribers() {
            return await api.get('/newsletter.php');
        }
    },
    
    // Contact API
    contact: {
        async send(contactData) {
            return await api.post('/contact.php', contactData);
        }
    },
    
    // Analytics API
    analytics: {
        async trackPageView(page) {
            return await api.post('/analytics.php', {
                action: 'pageview',
                page,
                timestamp: new Date().toISOString()
            });
        },
        
        async trackEvent(event, data = {}) {
            return await api.post('/analytics.php', {
                action: 'event',
                event,
                data,
                timestamp: new Date().toISOString()
            });
        },
        
        async getStats() {
            return await api.get('/analytics.php');
        }
    },
    
    // Comments API
    comments: {
        async getByPost(postId) {
            return await api.get(`/comments.php?post_id=${postId}`);
        },
        
        async create(commentData) {
            return await api.post('/comments.php', commentData);
        },
        
        async update(id, commentData) {
            return await api.put(`/comments.php?id=${id}`, commentData);
        },
        
        async delete(id) {
            return await api.delete(`/comments.php?id=${id}`);
        }
    },
    
    // User API
    user: {
        async login(credentials) {
            return await api.post('/auth.php', {
                action: 'login',
                ...credentials
            });
        },
        
        async logout() {
            return await api.post('/auth.php', {
                action: 'logout'
            });
        },
        
        async register(userData) {
            return await api.post('/auth.php', {
                action: 'register',
                ...userData
            });
        },
        
        async getProfile() {
            return await api.get('/profile.php');
        },
        
        async updateProfile(profileData) {
            return await api.put('/profile.php', profileData);
        },
        
        async resetPassword(email) {
            return await api.post('/auth.php', {
                action: 'reset_password',
                email
            });
        }
    },
    
    // Tags API
    tags: {
        async getAll() {
            return await api.get('/tags.php');
        },
        
        async getPopular(limit = 20) {
            return await api.get('/tags.php', { popular: true, limit });
        },
        
        async create(tagData) {
            return await api.post('/tags.php', tagData);
        }
    }
};

// API hooks for common operations
const APIHooks = {
    // Loading states
    loading: new Set(),
    
    // Error handling
    handleError(error, context = '') {
        console.error(`API Error ${context}:`, error);
        
        // Show user-friendly error message
        if (window.AIInsights && window.AIInsights.showToast) {
            let message = 'Something went wrong. Please try again.';
            
            if (error.message.includes('NetworkError')) {
                message = 'Network error. Please check your connection.';
            } else if (error.message.includes('404')) {
                message = 'Resource not found.';
            } else if (error.message.includes('500')) {
                message = 'Server error. Please try again later.';
            }
            
            window.AIInsights.showToast(message, 'error');
        }
        
        return null;
    },
    
    // Loading state management
    setLoading(key, isLoading) {
        if (isLoading) {
            this.loading.add(key);
        } else {
            this.loading.delete(key);
        }
        
        // Update UI loading indicators
        const loadingElement = document.querySelector(`[data-loading="${key}"]`);
        if (loadingElement) {
            loadingElement.classList.toggle('loading', isLoading);
        }
    },
    
    // Cache management
    cache: new Map(),
    
    async withCache(key, fetcher, ttl = 300000) { // 5 minutes default TTL
        const cached = this.cache.get(key);
        
        if (cached && Date.now() - cached.timestamp < ttl) {
            return cached.data;
        }
        
        try {
            const data = await fetcher();
            this.cache.set(key, {
                data,
                timestamp: Date.now()
            });
            return data;
        } catch (error) {
            // Return cached data if available, even if expired
            if (cached) {
                return cached.data;
            }
            throw error;
        }
    },
    
    // Retry mechanism
    async withRetry(operation, maxRetries = 3, delay = 1000) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                return await operation();
            } catch (error) {
                if (i === maxRetries - 1) throw error;
                
                await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
            }
        }
    }
};

// Initialize API tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    APIService.analytics.trackPageView(window.location.pathname)
        .catch(error => console.log('Analytics tracking failed:', error));
    
    // Track button clicks
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn') || e.target.closest('.btn')) {
            const button = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
            const action = button.textContent.trim() || 'button_click';
            
            APIService.analytics.trackEvent('button_click', {
                button_text: action,
                page: window.location.pathname
            }).catch(error => console.log('Event tracking failed:', error));
        }
    });
    
    // Track form submissions
    document.addEventListener('submit', function(e) {
        const form = e.target;
        const formName = form.id || form.className || 'unknown_form';
        
        APIService.analytics.trackEvent('form_submit', {
            form_name: formName,
            page: window.location.pathname
        }).catch(error => console.log('Form tracking failed:', error));
    });
});

// Enhanced API methods with error handling and loading states
const EnhancedAPI = {
    async loadFeaturedPosts() {
        const key = 'featured_posts';
        APIHooks.setLoading(key, true);
        
        try {
            const posts = await APIHooks.withCache(
                key,
                () => APIService.posts.getFeatured(),
                600000 // 10 minutes cache
            );
            
            return posts;
        } catch (error) {
            return APIHooks.handleError(error, 'loading featured posts');
        } finally {
            APIHooks.setLoading(key, false);
        }
    },
    
    async loadCategories() {
        const key = 'categories';
        APIHooks.setLoading(key, true);
        
        try {
            const categories = await APIHooks.withCache(
                key,
                () => APIService.categories.getAll(),
                1800000 // 30 minutes cache
            );
            
            return categories;
        } catch (error) {
            return APIHooks.handleError(error, 'loading categories');
        } finally {
            APIHooks.setLoading(key, false);
        }
    },
    
    async subscribeToNewsletter(email, name = '', interests = '') {
        const key = 'newsletter_subscribe';
        APIHooks.setLoading(key, true);
        
        try {
            const result = await APIHooks.withRetry(
                () => APIService.newsletter.subscribe(email, name, interests)
            );
            
            if (result && result.success) {
                if (window.AIInsights && window.AIInsights.showToast) {
                    window.AIInsights.showToast('Successfully subscribed to newsletter!', 'success');
                }
                
                // Track successful subscription
                APIService.analytics.trackEvent('newsletter_subscribe', {
                    email_domain: email.split('@')[1] || 'unknown'
                });
            }
            
            return result;
        } catch (error) {
            return APIHooks.handleError(error, 'subscribing to newsletter');
        } finally {
            APIHooks.setLoading(key, false);
        }
    },
    
    async searchPosts(query, page = 1, limit = 10) {
        const key = `search_${query}_${page}`;
        APIHooks.setLoading('search', true);
        
        try {
            const results = await APIHooks.withCache(
                key,
                () => APIService.posts.search(query, { page, limit }),
                300000 // 5 minutes cache
            );
            
            // Track search
            APIService.analytics.trackEvent('search', {
                query,
                results_count: results?.posts?.length || 0
            });
            
            return results;
        } catch (error) {
            return APIHooks.handleError(error, 'searching posts');
        } finally {
            APIHooks.setLoading('search', false);
        }
    }
};

// Export API services
window.APIService = APIService;
window.APIHooks = APIHooks;
window.EnhancedAPI = EnhancedAPI;
window.api = api;

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    api.abort();
});