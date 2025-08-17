// DOM Elements
const modal = document.getElementById('modal');
const contactForm = document.getElementById('contactForm');
const faqItems = document.querySelectorAll('.faq-item');

// Modal Functions
function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openModalWithService(serviceName) {
    // Открываем модальное окно
    openModal();
    
    // Устанавливаем соответствующий тип проекта в селекте
    const projectTypeSelect = document.getElementById('project_type');
    let optionValue = '';
    
    switch(serviceName) {
        case 'Telegram-бот':
            optionValue = 'bot';
            break;
        case 'Сайт/лендинг':
            optionValue = 'website';
            break;
        case 'Программа/скрипт':
            optionValue = 'script';
            break;
        case 'AI-видео/эдит':
            optionValue = 'video';
            break;
    }
    
    if (optionValue && projectTypeSelect) {
        projectTypeSelect.value = optionValue;
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// FAQ Toggle Functionality
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Form Submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    if (!data.name || !data.telegram || !data.project_type || !data.description || !data.privacy) {
        alert('Пожалуйста, заполните все обязательные поля и согласитесь с политикой конфиденциальности.');
        return;
    }
    
    // Validate Telegram username format
    if (!data.telegram.startsWith('@')) {
        data.telegram = '@' + data.telegram;
    }
    
    // Create message for Telegram
    const message = `🔥 Новая заявка с сайта!
    
👤 Имя: ${data.name}
📱 Telegram: ${data.telegram}
📧 Email: ${data.email || 'Не указан'}
🎯 Тип проекта: ${getProjectTypeText(data.project_type)}
💰 Бюджет: ${data.budget || 'Не указан'}

📝 Описание:
${data.description}

⏰ Время заявки: ${new Date().toLocaleString('ru-RU')}`;

    // Create Telegram link
    const telegramUrl = `https://t.me/Fmkam123?text=${encodeURIComponent(message)}`;
    
    // Show success message
    alert('Заявка сформирована! Сейчас откроется Telegram для отправки.');
    
    // Open Telegram
    window.open(telegramUrl, '_blank');
    
    // Close modal and reset form
    closeModal();
    contactForm.reset();
});

// Helper function to get project type text
function getProjectTypeText(type) {
    const types = {
        'bot': 'Telegram-бот',
        'website': 'Сайт/лендинг',
        'script': 'Программа/скрипт',
        'video': 'AI-видео/эдит'
    };
    return types[type] || type;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(14, 15, 19, 0.95)';
    } else {
        header.style.background = 'rgba(14, 15, 19, 0.9)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card, .process-step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const service = e.target.dataset.service;
            if (service) {
                projectTypeSelect.value = service;
            }
            modal.style.display = 'block';
        });
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Copy contact info to clipboard
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(function() {
        const originalText = element.textContent;
        element.textContent = 'Скопировано!';
        element.style.color = '#22D3EE';
        
        setTimeout(function() {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    }).catch(function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const originalText = element.textContent;
        element.textContent = 'Скопировано!';
        element.style.color = '#22D3EE';
        
        setTimeout(function() {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    });
}

// Add click handlers for contact info
document.addEventListener('DOMContentLoaded', function() {
    const contactLinks = document.querySelectorAll('.contact-item a');
    
    contactLinks.forEach(link => {
        // Add copy functionality on right-click
        link.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            copyToClipboard(this.textContent, this);
        });
    });
});

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateTelegram(telegram) {
    const re = /^@?[a-zA-Z0-9_]{5,32}$/;
    return re.test(telegram);
}

// Real-time form validation
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const telegramInput = document.getElementById('telegram');
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#ef4444';
                this.title = 'Введите корректный email';
            } else {
                this.style.borderColor = '';
                this.title = '';
            }
        });
    }
    
    if (telegramInput) {
        telegramInput.addEventListener('blur', function() {
            if (this.value && !validateTelegram(this.value)) {
                this.style.borderColor = '#ef4444';
                this.title = 'Введите корректный Telegram username';
            } else {
                this.style.borderColor = '';
                this.title = '';
            }
        });
        
        // Auto-add @ symbol
        telegramInput.addEventListener('input', function() {
            if (this.value && !this.value.startsWith('@')) {
                this.value = '@' + this.value;
            }
        });
    }
});

// Lazy loading for images (if added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(14, 15, 19, 0.95)';
    } else {
        header.style.background = 'rgba(14, 15, 19, 0.9)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Console message for developers
console.log(`
🚀 Сайт разработан Камилем
📱 Telegram: @Fmkam123
🌐 Нужен сайт или бот? Пишите!
`);

// Analytics helper (for future integration)
function trackEvent(eventName, properties = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    // Yandex Metrica
    if (typeof ym !== 'undefined') {
        ym(YANDEX_COUNTER_ID, 'reachGoal', eventName, properties);
    }
    
    console.log('Event tracked:', eventName, properties);
}

// Track form submissions
contactForm.addEventListener('submit', function() {
    trackEvent('form_submit', {
        form_type: 'contact_form'
    });
});

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        trackEvent('button_click', {
            button_text: e.target.textContent,
            button_type: 'primary'
        });
    }
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
