// Datamen Website - Main JavaScript
// Version: 1.0.0
// Author: Datamen Dev Team

(function() {
    'use strict';

    // ======================
    // Configuration
    // ======================
    const CONFIG = {
        whatsapp: {
            number: '+48555123456', // Numer WhatsApp Datamen
            defaultMessage: {
                pl: 'Dzień dobry, chciałbym uzyskać więcej informacji o usługach Datamen.',
                en: 'Hello, I would like to get more information about Datamen services.'
            }
        },
        webhook: {
            url: 'https://api.datamen.net/webhook/contact', // Production webhook endpoint
            enabled: true, // Ustaw false aby wyłączyć wysyłanie do WhatsApp
            timeout: 5000 // Timeout w milisekundach
        },
        animation: {
            duration: 800,
            easing: 'ease-in-out'
        },
        scroll: {
            offset: 80, // Height of fixed navbar
            smooth: true
        },
        form: {
            endpoint: '/api/contact', // Backend endpoint
            timeout: 10000
        },
        defaultLanguage: 'pl'
    };

    // ======================
    // Translations
    // ======================
    const TRANSLATIONS = {
        pl: {
            nav: {
                about: 'O nas',
                services: 'Usługi',
                whyUs: 'Dlaczego my',
                process: 'Proces',
                recommendations: 'Rekomendacje',
                contact: 'Kontakt'
            },
            hero: {
                title: 'Dedykowane Serwery i Rozwiązania <span class="gradient-text">Storage</span> dla Twojego Biznesu',
                subtitle: 'Nie oferujemy gotowych „pudełek". Projektujemy infrastrukturę IT dopasowaną do Twoich realnych potrzeb - ze <strong>znacznymi oszczędnościami</strong> i gwarancją niezawodności.',
                ctaPrimary: 'Zapytaj o wycenę',
                ctaSecondary: 'Zobacz rekomendacje'
            },
            about: {
                tag: 'O nas',
                title: 'Specjaliści od infrastruktury, która napędza Twój biznes',
                subtitle: 'Jesteśmy zespołem inżynierów i architektów IT, którzy wierzą, że każdy biznes zasługuje na infrastrukturę zaprojektowaną specjalnie dla niego.',
                card1: {
                    title: 'Projektowanie wysokowydajnych systemów',
                    desc: 'Systemy dla produkcji 4K/8K, rendering farms, AI/ML workloads'
                },
                card2: {
                    title: 'Storage od 100TB do 10PB',
                    desc: 'Skalowalne rozwiązania storage dla każdej wielkości biznesu'
                },
                card3: {
                    title: 'Optymalizacja workflow',
                    desc: 'Integracja z DaVinci Resolve, Adobe CC, Avid i innymi narzędziami'
                }
            },
            services: {
                tag: 'Nasze usługi',
                title: 'Rozwiązania dopasowane do Twojej branży',
                postprod: {
                    title: 'Studia Postprodukcyjne',
                    desc: 'Infrastruktura dla produkcji 4K/8K. Obsługujemy studia pracujące dla Netflix, HBO, Canal+.',
                    feature1: 'Storage dla produkcji 4K/6K/8K',
                    feature2: 'Rendering i color grading',
                    feature3: 'Współpraca zespołowa w czasie rzeczywistym',
                    feature4: 'Automatyczna archiwizacja',
                    link: 'Dowiedz się więcej'
                },
                cctv: {
                    title: 'Systemy CCTV i Security',
                    desc: 'Storage zgodny z wymogami prawnymi dla monitoringu wysokiej rozdzielczości.',
                    feature1: 'Obsługa 100+ kamer 4K/8K',
                    feature2: 'Retencja 30-90 dni',
                    feature3: 'Redundancja i backup',
                    feature4: 'Integracja z VMS',
                    link: 'Dowiedz się więcej'
                }
            },
            whyUs: {
                tag: 'Dlaczego Datamen',
                title: 'Twój partner technologiczny, nie tylko dostawca',
                benefit1: {
                    title: 'Indywidualne podejście',
                    desc: 'Analizujemy Twój workflow przed projektem. Żadnych gotowych konfiguracji.'
                },
                benefit2: {
                    title: 'Znaczne oszczędności',
                    desc: 'Precyzyjny dobór komponentów bez przepłacania za niewykorzystane zasoby.'
                },
                benefit3: {
                    title: 'Wsparcie ekspertów',
                    desc: 'Bezpośredni kontakt z inżynierami. Szybki czas odpowiedzi.'
                },
                benefit4: {
                    title: 'Skalowalność',
                    desc: 'Od 10TB do 10PB w ramach tego samego rozwiązania. Rośnij bez limitów.'
                },
                benefit5: {
                    title: 'Bezpieczeństwo',
                    desc: 'Enterprise-grade komponenty, szyfrowanie AES-256, najwyższy poziom bezpieczeństwa.'
                },
                benefit6: {
                    title: 'Szybkie wdrożenie',
                    desc: 'Typowa implementacja w 2-4 tygodnie. Ekspresowa w 5-7 dni.'
                }
            },
            process: {
                tag: 'Jak pracujemy',
                title: 'Od pomysłu do wdrożenia w 5 krokach',
                step1: {
                    title: 'Bezpłatna konsultacja',
                    desc: 'Analiza potrzeb i audyt obecnej infrastruktury',
                    time: '1-2 dni'
                },
                step2: {
                    title: 'Projekt rozwiązania',
                    desc: 'Szczegółowa architektura i wycena',
                    time: '3-5 dni'
                },
                step3: {
                    title: 'Proof of Concept',
                    desc: 'Testy wydajności z Twoimi danymi',
                    time: '5-10 dni'
                },
                step4: {
                    title: 'Wdrożenie',
                    desc: 'Instalacja, konfiguracja i migracja',
                    time: '2-4 tygodnie'
                },
                step5: {
                    title: 'Wsparcie i rozwój',
                    desc: 'Monitoring, optymalizacja, planowanie rozbudowy',
                    time: 'Ongoing'
                }
            },
            recommendations: {
                tag: 'Rekomendacje',
                title: 'Co mówią o nas nasi klienci',
                testimonial1: {
                    quote: 'Zespół Datamen podszedł do naszego projektu z pełnym profesjonalizmem. Infrastruktura, którą zaprojektowali, znacząco przyspieszyła nasze procesy produkcyjne.',
                    author: 'Dyrektor Techniczny',
                    company: 'Studio postprodukcyjne'
                },
                testimonial2: {
                    quote: 'Indywidualne podejście i zrozumienie naszych potrzeb. Nie próbowali sprzedać nam gotowego rozwiązania, tylko rzeczywiście zaprojektowali system pod nasze wymagania.',
                    author: 'Head of Operations',
                    company: 'Firma produkcyjna'
                },
                testimonial3: {
                    quote: 'Wsparcie techniczne na najwyższym poziomie. Bezpośredni kontakt z inżynierami, którzy znają nasz system na wylot. Nie ma tutaj żadnych call center.',
                    author: 'CTO',
                    company: 'Agencja kreatywna'
                }
            },
            contact: {
                title: 'Gotowy na infrastrukturę, która napędzi Twój biznes?',
                desc: 'Skontaktuj się z nami, a przygotujemy dedykowane rozwiązanie dopasowane do Twoich potrzeb. Kompleksowa analiza i bezpłatna konsultacja.',
                location: 'Warszawa (siedziba) • Obsługujemy Polskę i Europę',
                form: {
                    name: 'Imię i nazwisko',
                    contact: 'Email lub telefon',
                    contactPlaceholder: 'jan.kowalski@firma.pl lub +48 123 456 789',
                    message: 'Wiadomość',
                    consent: 'Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z',
                    privacyPolicy: 'Polityką Prywatności',
                    submit: 'Wyślij zapytanie'
                }
            },
            footer: {
                tagline: 'Projektujemy z 💙 dla Polski i Europy',
                description: 'Specjaliści od infrastruktury IT, którzy wierzą, że technologia powinna wspierać biznes, a nie go ograniczać.',
                copyright: 'Wszystkie prawa zastrzeżone.',
                services: {
                    title: 'Usługi',
                    postprod: 'Studia postprodukcyjne',
                    cctv: 'Systemy CCTV',
                    consulting: 'Konsulting IT'
                },
                company: {
                    title: 'Firma',
                    about: 'O nas',
                    recommendations: 'Rekomendacje',
                    process: 'Jak pracujemy',
                    contact: 'Kontakt'
                },
                legal: {
                    title: 'Prawne',
                    privacy: 'Polityka prywatności',
                    terms: 'Regulamin',
                    sla: 'SLA'
                }
            },
            cookie: {
                message: 'Używamy plików cookie, aby poprawić Twoje doświadczenia. Kontynuując, zgadzasz się z naszą',
                privacyPolicy: 'Polityką Prywatności',
                accept: 'Akceptuj',
                reject: 'Odrzuć'
            }
        },
        en: {
            nav: {
                about: 'About',
                services: 'Services',
                whyUs: 'Why Choose Us',
                process: 'Process',
                recommendations: 'Testimonials',
                contact: 'Contact'
            },
            hero: {
                title: 'Dedicated Servers and <span class="gradient-text">Storage</span> Solutions for Your Business',
                subtitle: 'We don\'t offer ready-made "boxes". We design IT infrastructure tailored to your real needs - with <strong>significant savings</strong> and reliability guarantee.',
                ctaPrimary: 'Get a Quote',
                ctaSecondary: 'See Testimonials'
            },
            about: {
                tag: 'About Us',
                title: 'Infrastructure specialists that power your business',
                subtitle: 'We are a team of IT engineers and architects who believe that every business deserves infrastructure designed specifically for it.',
                card1: {
                    title: 'High-performance systems design',
                    desc: 'Systems for 4K/8K production, rendering farms, AI/ML workloads'
                },
                card2: {
                    title: 'Storage from 100TB to 10PB',
                    desc: 'Scalable storage solutions for any business size'
                },
                card3: {
                    title: 'Workflow optimization',
                    desc: 'Integration with DaVinci Resolve, Adobe CC, Avid and other tools'
                }
            },
            services: {
                tag: 'Our Services',
                title: 'Solutions tailored to your industry',
                postprod: {
                    title: 'Post-Production Studios',
                    desc: 'Infrastructure for 4K/8K production. We serve studios working for Netflix, HBO, Canal+.',
                    feature1: '4K/6K/8K production storage',
                    feature2: 'Rendering and color grading',
                    feature3: 'Real-time team collaboration',
                    feature4: 'Automatic archiving',
                    link: 'Learn more'
                },
                cctv: {
                    title: 'CCTV & Security Systems',
                    desc: 'Storage compliant with legal requirements for high-resolution monitoring.',
                    feature1: '100+ 4K/8K cameras support',
                    feature2: '30-90 days retention',
                    feature3: 'Redundancy and backup',
                    feature4: 'VMS integration',
                    link: 'Learn more'
                }
            },
            whyUs: {
                tag: 'Why Datamen',
                title: 'Your technology partner, not just a supplier',
                benefit1: {
                    title: 'Individual approach',
                    desc: 'We analyze your workflow before the project. No ready-made configurations.'
                },
                benefit2: {
                    title: 'Significant savings',
                    desc: 'Precise component selection without overpaying for unused resources.'
                },
                benefit3: {
                    title: 'Expert support',
                    desc: 'Direct contact with engineers. Fast response time.'
                },
                benefit4: {
                    title: 'Scalability',
                    desc: 'From 10TB to 10PB within the same solution. Grow without limits.'
                },
                benefit5: {
                    title: 'Security',
                    desc: 'Enterprise-grade components, AES-256 encryption, highest security level.'
                },
                benefit6: {
                    title: 'Fast deployment',
                    desc: 'Typical implementation in 2-4 weeks. Express in 5-7 days.'
                }
            },
            process: {
                tag: 'How We Work',
                title: 'From idea to implementation in 5 steps',
                step1: {
                    title: 'Free consultation',
                    desc: 'Needs analysis and current infrastructure audit',
                    time: '1-2 days'
                },
                step2: {
                    title: 'Solution design',
                    desc: 'Detailed architecture and pricing',
                    time: '3-5 days'
                },
                step3: {
                    title: 'Proof of Concept',
                    desc: 'Performance testing with your data',
                    time: '5-10 days'
                },
                step4: {
                    title: 'Implementation',
                    desc: 'Installation, configuration and migration',
                    time: '2-4 weeks'
                },
                step5: {
                    title: 'Support and growth',
                    desc: 'Monitoring, optimization, expansion planning',
                    time: 'Ongoing'
                }
            },
            recommendations: {
                tag: 'Testimonials',
                title: 'What our clients say about us',
                testimonial1: {
                    quote: 'The Datamen team approached our project with complete professionalism. The infrastructure they designed significantly accelerated our production processes.',
                    author: 'Technical Director',
                    company: 'Post-production studio'
                },
                testimonial2: {
                    quote: 'Individual approach and understanding of our needs. They didn\'t try to sell us a ready-made solution, but actually designed a system tailored to our requirements.',
                    author: 'Head of Operations',
                    company: 'Production company'
                },
                testimonial3: {
                    quote: 'Technical support at the highest level. Direct contact with engineers who know our system inside out. There are no call centers here.',
                    author: 'CTO',
                    company: 'Creative agency'
                }
            },
            contact: {
                title: 'Ready for infrastructure that will power your business?',
                desc: 'Contact us and we\'ll prepare a dedicated solution tailored to your needs. Comprehensive analysis and free consultation.',
                location: 'Warsaw (HQ) • Serving Poland & Europe',
                form: {
                    name: 'Full name',
                    contact: 'Email or phone',
                    contactPlaceholder: 'john.smith@company.com or +48 123 456 789',
                    message: 'Message',
                    consent: 'I consent to the processing of my personal data in accordance with the',
                    privacyPolicy: 'Privacy Policy',
                    submit: 'Send inquiry'
                }
            },
            footer: {
                tagline: 'Designed with 💙 for Poland & Europe',
                description: 'IT infrastructure specialists who believe technology should support business, not limit it.',
                copyright: 'All rights reserved.',
                services: {
                    title: 'Services',
                    postprod: 'Post-production studios',
                    cctv: 'CCTV systems',
                    consulting: 'IT consulting'
                },
                company: {
                    title: 'Company',
                    about: 'About us',
                    recommendations: 'Testimonials',
                    process: 'How we work',
                    contact: 'Contact'
                },
                legal: {
                    title: 'Legal',
                    privacy: 'Privacy policy',
                    terms: 'Terms of service',
                    sla: 'SLA'
                }
            },
            cookie: {
                message: 'We use cookies to improve your experience. By continuing, you agree to our',
                privacyPolicy: 'Privacy Policy',
                accept: 'Accept',
                reject: 'Reject'
            }
        }
    };

    // ======================
    // Language Management
    // ======================
    const languageManager = {
        currentLanguage: CONFIG.defaultLanguage,
        
        init() {
            this.loadLanguagePreference();
            this.setupLanguageSwitcher();
            this.applyTranslations();
        },
        
        loadLanguagePreference() {
            const savedLang = localStorage.getItem('datamen-language');
            const browserLang = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pl';
            this.currentLanguage = savedLang || browserLang || CONFIG.defaultLanguage;
        },
        
        setupLanguageSwitcher() {
            const langButtons = document.querySelectorAll('.lang-btn');
            langButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const lang = e.target.getAttribute('data-lang');
                    this.switchLanguage(lang);
                });
            });
            
            this.updateLanguageSwitcher();
        },
        
        switchLanguage(lang) {
            if (lang === this.currentLanguage) return;
            
            this.currentLanguage = lang;
            localStorage.setItem('datamen-language', lang);
            this.updateLanguageSwitcher();
            this.applyTranslations();
            this.updatePageMetadata();
        },
        
        updateLanguageSwitcher() {
            const langButtons = document.querySelectorAll('.lang-btn');
            langButtons.forEach(btn => {
                const btnLang = btn.getAttribute('data-lang');
                btn.classList.toggle('active', btnLang === this.currentLanguage);
            });
        },
        
        applyTranslations() {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                const translation = this.getTranslation(key);
                if (translation) {
                    // Check if translation contains HTML that should be preserved
                    const allowHtml = translation.includes('<strong>') || 
                                    translation.includes('<span') || 
                                    translation.includes('<em>');
                    
                    // Use secure content setting
                    utils.setElementContent(element, translation, allowHtml);
                }
            });
            
            // Update form placeholders
            this.updateFormElements();
            
            // Update WhatsApp message
            this.updateWhatsAppMessage();
        },
        
        updateFormElements() {
            const nameInput = document.getElementById('name');
            const contactInput = document.getElementById('contact');
            const messageInput = document.getElementById('message');
            const submitBtn = document.querySelector('button[type="submit"] span');
            
            if (nameInput) {
                const nameLabel = document.querySelector('label[for="name"]');
                if (nameLabel) nameLabel.textContent = this.getTranslation('contact.form.name') + ' *';
            }
            
            if (contactInput) {
                const contactLabel = document.querySelector('label[for="contact"]');
                if (contactLabel) contactLabel.textContent = this.getTranslation('contact.form.contact') + ' *';
                contactInput.placeholder = this.getTranslation('contact.form.contactPlaceholder');
            }
            
            if (messageInput) {
                const messageLabel = document.querySelector('label[for="message"]');
                if (messageLabel) messageLabel.textContent = this.getTranslation('contact.form.message') + ' *';
            }
            
            if (submitBtn) {
                submitBtn.textContent = this.getTranslation('contact.form.submit');
            }
        },
        
        updateWhatsAppMessage() {
            CONFIG.whatsapp.currentMessage = CONFIG.whatsapp.defaultMessage[this.currentLanguage];
        },
        
        updatePageMetadata() {
            document.documentElement.lang = this.currentLanguage;
            
            // Update meta tags based on language
            if (this.currentLanguage === 'en') {
                document.title = 'Datamen - Dedicated Servers and Storage Solutions for Your Business';
                const description = document.querySelector('meta[name="description"]');
                if (description) {
                    description.content = 'We design IT infrastructure tailored to your needs. Significant savings, reliability guarantee. We serve post-production studios and CCTV companies in Warsaw.';
                }
            } else {
                document.title = 'Datamen - Dedykowane Serwery i Rozwiązania Storage dla Twojego Biznesu';
                const description = document.querySelector('meta[name="description"]');
                if (description) {
                    description.content = 'Projektujemy infrastrukturę IT dopasowaną do Twoich potrzeb. Znaczne oszczędności, gwarancja niezawodności. Obsługujemy studia postprodukcyjne i firmy CCTV w Warszawie.';
                }
            }
        },
        
        getTranslation(key) {
            const keys = key.split('.');
            let translation = TRANSLATIONS[this.currentLanguage];
            
            for (const k of keys) {
                if (translation && translation[k]) {
                    translation = translation[k];
                } else {
                    console.warn(`Translation missing for key: ${key} in language: ${this.currentLanguage}`);
                    return null;
                }
            }
            
            return translation;
        }
    };

    // ======================
    // Theme Management
    // ======================
    const themeManager = {
        currentTheme: 'light',
        
        init() {
            this.loadThemePreference();
            this.setupThemeToggle();
            this.applyTheme();
        },
        
        loadThemePreference() {
            // Check for saved theme preference
            const savedTheme = localStorage.getItem('datamen-theme');
            
            // Check for system preference if no saved theme
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            this.currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        },
        
        setupThemeToggle() {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    this.toggleTheme();
                });
            }
            
            // Listen for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('datamen-theme')) {
                    this.currentTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme();
                }
            });
        },
        
        toggleTheme() {
            this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('datamen-theme', this.currentTheme);
            this.applyTheme();
            this.animateToggle();
        },
        
        applyTheme() {
            document.documentElement.setAttribute('data-theme', this.currentTheme);
            this.updateThemeIcon();
        },
        
        updateThemeIcon() {
            const themeIcon = document.querySelector('.theme-icon');
            if (themeIcon) {
                themeIcon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
            }
        },
        
        animateToggle() {
            const toggle = document.getElementById('themeToggle');
            if (toggle) {
                toggle.classList.add('rotating');
                setTimeout(() => {
                    toggle.classList.remove('rotating');
                }, 300);
            }
        }
    };

    // ======================
    // DOM Elements Cache
    // ======================
    const elements = {
        navbar: document.querySelector('.navbar'),
        navToggle: document.getElementById('hamburger'),
        navMenu: document.querySelector('.nav-menu'),
        navLinks: document.querySelectorAll('.nav-link'),
        contactForm: document.getElementById('contactForm'),
        cookieConsent: document.getElementById('cookieConsent'),
        scrollTopBtn: document.getElementById('scrollTop'),
        statsNumbers: document.querySelectorAll('.stat-number'),
        lazyImages: document.querySelectorAll('img[data-src]'),
        accordionButtons: document.querySelectorAll('.accordion-button')
    };

    // ======================
    // Utility Functions
    // ======================
    const utils = {
        // Debounce function for performance
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Throttle function for scroll events
        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Properly escape HTML to prevent XSS
        escapeHtml(input) {
            if (typeof input !== 'string') return '';
            return input
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;')
                .replace(/\//g, '&#x2F;');
        },

        // Sanitize input to prevent XSS - improved implementation
        sanitizeInput(input) {
            if (typeof input !== 'string') return '';
            return this.escapeHtml(input.trim());
        },

        // Safe way to set content that may contain allowed HTML
        setElementContent(element, content, allowHtml = false) {
            if (!element || typeof content !== 'string') return;
            
            if (allowHtml) {
                // Only allow specific safe HTML tags
                const allowedTags = ['strong', 'em', 'span', 'br'];
                const cleanContent = this.sanitizeHtml(content, allowedTags);
                element.innerHTML = cleanContent;
            } else {
                // Use textContent for plain text - safe from XSS
                element.textContent = content;
            }
        },

        // Advanced HTML sanitization for allowed tags only
        sanitizeHtml(html, allowedTags = []) {
            // Create a temporary DOM element
            const temp = document.createElement('div');
            temp.innerHTML = html;
            
            // Remove all tags except allowed ones
            const walker = document.createTreeWalker(
                temp,
                NodeFilter.SHOW_ELEMENT,
                null,
                false
            );
            
            const elementsToRemove = [];
            let node;
            
            while (node = walker.nextNode()) {
                if (!allowedTags.includes(node.tagName.toLowerCase())) {
                    elementsToRemove.push(node);
                }
            }
            
            // Remove disallowed elements but keep their text content
            elementsToRemove.forEach(el => {
                el.replaceWith(document.createTextNode(el.textContent));
            });
            
            return temp.innerHTML;
        },

        // Validate email format
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        // Format phone number
        formatPhone(phone) {
            return phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})/, '+48 $1 $2 $3');
        },

        // Get cookie value
        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        },

        // Set cookie
        setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = `expires=${date.toUTCString()}`;
            document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict;Secure`;
        }
    };

    // ======================
    // Navigation Functions
    // ======================
    const navigation = {
        // Initialize navigation
        init() {
            this.setupMobileMenu();
            this.setupSmoothScroll();
            this.setupStickyNav();
            this.setupActiveLinks();
        },

        // Mobile menu toggle
        setupMobileMenu() {
            if (!elements.navToggle) return;

            elements.navToggle.addEventListener('click', () => {
                elements.navMenu.classList.toggle('active');
                elements.navToggle.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                
                // Update ARIA attributes
                const isOpen = elements.navMenu.classList.contains('active');
                elements.navToggle.setAttribute('aria-expanded', isOpen);
                elements.navMenu.setAttribute('aria-hidden', !isOpen);
            });

            // Close menu on link click
            elements.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    elements.navMenu.classList.remove('active');
                    elements.navToggle.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });

            // Close menu on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && elements.navMenu.classList.contains('active')) {
                    elements.navMenu.classList.remove('active');
                    elements.navToggle.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        },

        // Smooth scrolling
        setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const target = document.querySelector(targetId);
                    if (!target) return;

                    const offset = CONFIG.scroll.offset;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, targetId);
                });
            });
        },

        // Sticky navigation
        setupStickyNav() {
            if (!elements.navbar) return;

            let lastScroll = 0;
            const navHeight = elements.navbar.offsetHeight;

            const handleScroll = utils.throttle(() => {
                const currentScroll = window.scrollY;

                // Add/remove sticky class
                if (currentScroll > navHeight) {
                    elements.navbar.classList.add('sticky');
                } else {
                    elements.navbar.classList.remove('sticky');
                }

                // Hide/show on scroll
                if (currentScroll > lastScroll && currentScroll > navHeight * 2) {
                    elements.navbar.classList.add('hidden');
                } else {
                    elements.navbar.classList.remove('hidden');
                }

                lastScroll = currentScroll;
            }, 100);

            window.addEventListener('scroll', handleScroll);
        },

        // Active navigation links
        setupActiveLinks() {
            const sections = document.querySelectorAll('section[id]');
            
            const handleScroll = utils.throttle(() => {
                let current = '';
                const scrollY = window.scrollY;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop - CONFIG.scroll.offset - 50;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                elements.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            }, 100);

            window.addEventListener('scroll', handleScroll);
        }
    };

    // ======================
    // Form Handling
    // ======================
    const formHandler = {
        init() {
            if (!elements.contactForm) return;

            elements.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(e.target);
            });

            // Real-time validation
            this.setupValidation();
        },

        setupValidation() {
            const inputs = elements.contactForm.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', utils.debounce(() => {
                    if (input.classList.contains('error')) {
                        this.validateField(input);
                    }
                }, 500));
            });
        },

        validateField(field) {
            const value = field.value.trim();
            const type = field.type;
            const required = field.hasAttribute('required');
            let isValid = true;
            let errorMessage = '';

            // Remove existing error
            field.classList.remove('error');
            const errorEl = field.parentElement.querySelector('.error-message');
            if (errorEl) errorEl.remove();

            // Check required
            if (required && !value) {
                isValid = false;
                errorMessage = 'To pole jest wymagane';
            }

            // Check specific types
            if (value) {
                // Special validation for combined contact field
                if (field.name === 'contact') {
                    const isEmail = value.includes('@');
                    const isPhone = /^[\+]?[\d\s\-\(\)]+$/.test(value);
                    
                    if (!isEmail && !isPhone) {
                        isValid = false;
                        errorMessage = 'Wprowadź poprawny adres email lub numer telefonu';
                    } else if (isEmail && !utils.validateEmail(value)) {
                        isValid = false;
                        errorMessage = 'Wprowadź poprawny adres email';
                    } else if (isPhone && value.length < 6) {
                        isValid = false;
                        errorMessage = 'Wprowadź poprawny numer telefonu';
                    }
                } else {
                    switch(type) {
                        case 'email':
                            if (!utils.validateEmail(value)) {
                                isValid = false;
                                errorMessage = 'Wprowadź poprawny adres email';
                            }
                            break;
                        case 'tel':
                            if (!/^[\d\s\+\-\(\)]+$/.test(value)) {
                                isValid = false;
                                errorMessage = 'Wprowadź poprawny numer telefonu';
                            }
                            break;
                    }
                }
            }

            // Show error if invalid
            if (!isValid) {
                field.classList.add('error');
                const error = document.createElement('span');
                error.className = 'error-message';
                error.textContent = errorMessage;
                field.parentElement.appendChild(error);
            }

            return isValid;
        },

        checkRateLimit() {
            const now = Date.now();
            const rateLimit = {
                maxAttempts: 3,
                windowMs: 5 * 60 * 1000, // 5 minutes
                storageKey: 'datamen_form_attempts'
            };
            
            // Get previous attempts from localStorage
            let attempts = [];
            try {
                const stored = localStorage.getItem(rateLimit.storageKey);
                attempts = stored ? JSON.parse(stored) : [];
            } catch (e) {
                attempts = [];
            }
            
            // Remove old attempts outside the window
            attempts = attempts.filter(timestamp => now - timestamp < rateLimit.windowMs);
            
            // Check if we're over the limit
            if (attempts.length >= rateLimit.maxAttempts) {
                return false;
            }
            
            // Add current attempt
            attempts.push(now);
            
            // Save back to localStorage
            try {
                localStorage.setItem(rateLimit.storageKey, JSON.stringify(attempts));
            } catch (e) {
                // If localStorage fails, allow submission but log warning
                console.warn('Rate limiting storage failed');
            }
            
            return true;
        },

        async handleSubmit(form) {
            // Rate limiting - max 3 submissions per 5 minutes
            if (!this.checkRateLimit()) {
                this.showMessage('Zbyt dużo prób wysłania. Spróbuj ponownie za kilka minut.', 'error');
                return;
            }
            
            // Validate all fields
            const inputs = form.querySelectorAll('input, textarea, select');
            let isValid = true;

            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                this.showMessage('Proszę poprawić błędy w formularzu', 'error');
                return;
            }

            // Check honeypot fields
            const honeypotFields = form.querySelectorAll('input[name="company_url"], input[name="backup_email"]');
            for (const honeypot of honeypotFields) {
                if (honeypot && honeypot.value.trim()) {
                    console.warn('Spam detection: honeypot filled');
                    // Don't show error to user - silent rejection
                    return;
                }
            }

            // Prepare data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Sanitize data
            Object.keys(data).forEach(key => {
                if (typeof data[key] === 'string') {
                    data[key] = utils.sanitizeInput(data[key]);
                }
            });

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Wysyłanie...';

            try {
                // Simulate API call (replace with actual endpoint)
                await this.sendToAPI(data);
                
                // Success
                this.showMessage('Wiadomość została wysłana pomyślnie!', 'success');
                form.reset();
                
                // Track conversion
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        event_category: 'Contact',
                        event_label: 'Contact Form'
                    });
                }
            } catch (error) {
                console.error('Form submission error:', error);
                this.showMessage('Wystąpił błąd. Proszę spróbować ponownie.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        },

        async sendToAPI(data) {
            // 1. Send to main API endpoint (simulate API call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // 2. Silently send to WhatsApp webhook in background
            if (CONFIG.webhook.enabled) {
                this.sendToWhatsAppWebhook(data).catch(error => {
                    // Fail silently - don't interrupt user experience
                    console.log('Background WhatsApp webhook completed');
                });
            }
            
            return { success: true };
        },

        async sendToWhatsAppWebhook(data) {
            try {
                // Format message for WhatsApp
                const whatsappMessage = this.formatWhatsAppMessage(data);
                
                // Prepare webhook payload
                const payload = {
                    phone: CONFIG.whatsapp.number,
                    message: whatsappMessage,
                    source: 'datamen-website',
                    timestamp: new Date().toISOString(),
                    formData: {
                        name: data.name,
                        contact: data.contact,
                        message: data.message
                    }
                };
                
                // Send to webhook with timeout
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), CONFIG.webhook.timeout);
                
                const response = await fetch(CONFIG.webhook.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'Datamen-Website-Form'
                    },
                    body: JSON.stringify(payload),
                    signal: controller.signal
                });
                
                clearTimeout(timeoutId);
                
                // Track successful webhook
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'webhook_sent', {
                        event_category: 'Contact',
                        event_label: 'WhatsApp_Webhook'
                    });
                }
                
                console.log('WhatsApp webhook sent successfully');
                return response.ok;
                
            } catch (error) {
                // Fail silently - log for debugging but don't interrupt user flow
                console.log('WhatsApp webhook info:', error.name);
                return false;
            }
        },


        formatWhatsAppMessage(data) {
            let message = `🏢 **Nowe zapytanie ze strony Datamen**\n\n`;
            message += `👤 **Kontakt:** ${data.name || 'Nie podano'}\n`;
            
            // Handle combined contact field (email or phone)
            if (data.contact) {
                const isEmail = data.contact.includes('@');
                message += `${isEmail ? '📧' : '📱'} **${isEmail ? 'Email' : 'Telefon'}:** ${data.contact}\n`;
            }
            
            if (data.message) {
                message += `\n💬 **Wiadomość:**\n${data.message}\n`;
            }
            
            message += `\n🕒 **Data:** ${new Date().toLocaleString('pl-PL')}\n`;
            message += `🌐 **Źródło:** Strona WWW Datamen`;
            
            return message;
        },

        showMessage(message, type) {
            // Remove existing message
            const existingMessage = document.querySelector('.form-message');
            if (existingMessage) existingMessage.remove();

            // Create message element
            const messageEl = document.createElement('div');
            messageEl.className = `form-message ${type}`;
            messageEl.textContent = message;

            // Insert after form
            elements.contactForm.parentElement.insertBefore(messageEl, elements.contactForm.nextSibling);

            // Remove after 5 seconds
            setTimeout(() => {
                messageEl.classList.add('fade-out');
                setTimeout(() => messageEl.remove(), 300);
            }, 5000);
        }
    };

    // ======================
    // WhatsApp Integration
    // ======================
    const whatsappHandler = {
        openWhatsApp(customMessage) {
            // Validate input
            if (customMessage && typeof customMessage !== 'string') {
                console.warn('WhatsApp message must be a string');
                return false;
            }
            
            const message = customMessage || CONFIG.whatsapp.defaultMessage;
            const phone = CONFIG.whatsapp.number.replace(/\D/g, '');
            
            // Validate phone number
            if (!phone || phone.length < 10) {
                console.warn('Invalid WhatsApp phone number');
                return false;
            }
            
            // Sanitize message
            const sanitizedMessage = utils.escapeHtml(message);
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(sanitizedMessage)}`;
            
            // Track event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'Contact',
                    event_label: 'WhatsApp'
                });
            }
            
            // Open WhatsApp
            window.open(url, '_blank', 'noopener,noreferrer');
            return true;
        }
    };

    // ======================
    // Cookie Consent
    // ======================
    const cookieConsent = {
        init() {
            // Check if consent already given
            if (utils.getCookie('cookieConsent') === 'accepted') {
                this.loadAnalytics();
                return;
            }

            // Show banner after 2 seconds
            setTimeout(() => {
                this.showBanner();
            }, 2000);
        },

        showBanner() {
            if (!elements.cookieConsent) {
                console.warn('Cookie consent element not found');
                return;
            }
            
            elements.cookieConsent.classList.add('show');
            
            // Setup buttons - use existing HTML buttons
            const acceptBtn = document.getElementById('acceptCookiesBtn');
            const rejectBtn = document.getElementById('rejectCookiesBtn');
            
            // Remove any existing listeners to prevent duplicates
            acceptBtn?.removeEventListener('click', this.handleAccept);
            rejectBtn?.removeEventListener('click', this.handleReject);
            
            // Add new listeners with bound context
            this.handleAccept = this.handleAccept.bind(this);
            this.handleReject = this.handleReject.bind(this);
            
            acceptBtn?.addEventListener('click', this.handleAccept);
            rejectBtn?.addEventListener('click', this.handleReject);
        },

        handleAccept(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Debounce to prevent multiple clicks
            if (this.processing) return;
            this.processing = true;
            
            utils.setCookie('cookieConsent', 'accepted', 365);
            elements.cookieConsent.classList.remove('show');
            this.loadAnalytics();
            
            // Reset debounce after animation
            setTimeout(() => {
                this.processing = false;
            }, 500);
        },

        handleReject(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Debounce to prevent multiple clicks
            if (this.processing) return;
            this.processing = true;
            
            utils.setCookie('cookieConsent', 'rejected', 365);
            elements.cookieConsent.classList.remove('show');
            
            // Reset debounce after animation
            setTimeout(() => {
                this.processing = false;
            }, 500);
        },

        // Legacy methods for backward compatibility
        accept() {
            this.handleAccept({ preventDefault: () => {}, stopPropagation: () => {} });
        },

        reject() {
            this.handleReject({ preventDefault: () => {}, stopPropagation: () => {} });
        },

        loadAnalytics() {
            // Load Google Analytics or other tracking scripts
            console.log('Analytics enabled');
            // Example:
            // const script = document.createElement('script');
            // script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
            // script.async = true;
            // document.head.appendChild(script);
        }
    };

    // ======================
    // Animations & Effects
    // ======================
    const animations = {
        init() {
            this.initAOS();
            this.initCounters();
            this.initParallax();
            this.initScrollToTop();
        },

        initAOS() {
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: true,
                    offset: 100
                });
            }
        },

        initCounters() {
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                        this.animateCounter(entry.target);
                        entry.target.classList.add('counted');
                    }
                });
            }, observerOptions);

            elements.statsNumbers.forEach(counter => {
                observer.observe(counter);
            });
        },

        animateCounter(element) {
            const target = parseFloat(element.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            const isDecimal = target % 1 !== 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    if (isDecimal) {
                        element.textContent = Math.min(current, target).toFixed(1);
                    } else {
                        element.textContent = Math.floor(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (isDecimal) {
                        element.textContent = target.toFixed(1);
                    } else {
                        element.textContent = target;
                    }
                }
            };

            updateCounter();
        },

        initParallax() {
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            if (parallaxElements.length === 0) return;

            const handleParallax = utils.throttle(() => {
                const scrolled = window.scrollY;
                
                parallaxElements.forEach(element => {
                    const speed = element.getAttribute('data-parallax') || 0.5;
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                });
            }, 10);

            window.addEventListener('scroll', handleParallax);
        },

        initScrollToTop() {
            if (!elements.scrollTopBtn) {
                this.createScrollButton();
            }

            // Show/hide button
            const handleScroll = utils.throttle(() => {
                if (window.scrollY > 500) {
                    elements.scrollTopBtn.classList.add('show');
                } else {
                    elements.scrollTopBtn.classList.remove('show');
                }
            }, 100);

            window.addEventListener('scroll', handleScroll);

            // Scroll to top on click
            elements.scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        },

        createScrollButton() {
            const button = document.createElement('button');
            button.id = 'scrollTop';
            button.className = 'scroll-top';
            button.type = 'button';
            button.setAttribute('aria-label', 'Scroll to top');
            
            // Create icon using DOM instead of innerHTML
            const icon = document.createElement('i');
            icon.className = 'fas fa-arrow-up';
            icon.setAttribute('aria-hidden', 'true');
            
            button.appendChild(icon);
            document.body.appendChild(button);
            elements.scrollTopBtn = button;
        }
    };

    // ======================
    // Lazy Loading
    // ======================
    const lazyLoader = {
        init() {
            if ('IntersectionObserver' in window) {
                this.setupIntersectionObserver();
            } else {
                this.loadAllImages();
            }
        },

        setupIntersectionObserver() {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            elements.lazyImages.forEach(img => imageObserver.observe(img));
        },

        loadImage(img) {
            const src = img.getAttribute('data-src');
            if (!src) return;

            // Create new image to preload
            const newImg = new Image();
            newImg.onload = () => {
                img.src = src;
                img.classList.add('loaded');
                img.removeAttribute('data-src');
            };
            newImg.src = src;
        },

        loadAllImages() {
            elements.lazyImages.forEach(img => this.loadImage(img));
        }
    };

    // ======================
    // FAQ Accordion
    // ======================
    const accordion = {
        init() {
            elements.accordionButtons.forEach(button => {
                button.addEventListener('click', () => this.toggle(button));
            });
        },

        toggle(button) {
            const content = button.nextElementSibling;
            const isOpen = button.classList.contains('active');

            // Close all other accordions
            elements.accordionButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('active');
                    btn.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle current accordion
            if (!isOpen) {
                button.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                button.classList.remove('active');
                content.style.maxHeight = null;
            }
        }
    };

    // ======================
    // Performance Monitoring
    // ======================
    const performance = {
        init() {
            // Log performance metrics
            if ('performance' in window) {
                window.addEventListener('load', () => {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    const connectTime = perfData.responseEnd - perfData.requestStart;
                    const renderTime = perfData.domComplete - perfData.domLoading;

                    console.log('Performance Metrics:', {
                        pageLoadTime: pageLoadTime + 'ms',
                        connectTime: connectTime + 'ms',
                        renderTime: renderTime + 'ms'
                    });

                    // Send to analytics if needed
                    if (typeof gtag !== 'undefined' && pageLoadTime > 0) {
                        gtag('event', 'timing_complete', {
                            name: 'load',
                            value: pageLoadTime,
                            event_category: 'Performance'
                        });
                    }
                });
            }

            // Monitor Core Web Vitals
            this.observeWebVitals();
        },

        observeWebVitals() {
            // Largest Contentful Paint
            if ('PerformanceObserver' in window) {
                try {
                    const lcpObserver = new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        const lastEntry = entries[entries.length - 1];
                        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
                    });
                    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
                } catch (e) {
                    // LCP is not available
                }
            }
        }
    };

    // ======================
    // Initialize Everything
    // ======================
    const init = () => {
        // Language initialization (must be first)
        languageManager.init();
        
        // Theme initialization (early for better UX)
        themeManager.init();
        
        // Core functionality
        navigation.init();
        formHandler.init();
        cookieConsent.init();
        
        // Enhancements
        animations.init();
        lazyLoader.init();
        accordion.init();
        
        // Performance
        performance.init();

        // Service Worker Registration (for PWA)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('Service Worker registered'))
                    .catch(err => console.log('Service Worker registration failed'));
            });
        }

        console.log('Datamen website initialized successfully');
    };
    
    // Secured global functions with validation
    window.acceptCookies = function() {
        if (typeof cookieConsent === 'object' && typeof cookieConsent.accept === 'function') {
            cookieConsent.accept();
        } else {
            console.warn('Cookie consent system not available');
        }
    };

    window.rejectCookies = function() {
        if (typeof cookieConsent === 'object' && typeof cookieConsent.reject === 'function') {
            cookieConsent.reject();
        } else {
            console.warn('Cookie consent system not available');
        }
    };

    window.openWhatsApp = function(customMessage) {
        if (typeof whatsappHandler === 'object' && typeof whatsappHandler.openWhatsApp === 'function') {
            return whatsappHandler.openWhatsApp(customMessage);
        } else {
            console.warn('WhatsApp handler not available');
            return false;
        }
    };

    // Note: Cookie button setup is now handled directly in cookieConsent.showBanner()
    // to prevent duplicate event listeners and conflicts

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
        });
    } else {
        init();
    }

})();

// Secure API export - limited public interface
window.DatamenApp = Object.freeze({
    // Public API methods
    openWhatsApp: window.openWhatsApp,
    acceptCookies: window.acceptCookies,
    rejectCookies: window.rejectCookies,
    
    // Version info
    version: '1.0.0',
    
    // Security info
    securityVersion: '1.1.0',
    
    // Limited utility access (functions only, no internal utils)
    utils: Object.freeze({
        // Export safe public utilities
        sanitizeText: function(text) {
            if (typeof text !== 'string') return '';
            return text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;')
                .replace(/\//g, '&#x2F;');
        },
        validateEmail: function(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        validatePhone: function(phone) {
            return /^[\+]?[\d\s\-\(\)]{10,}$/.test(phone);
        }
    })
});