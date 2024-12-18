// Menu items data with translations
const menuItems = [
    // Breakfast - Continental
    {
        name: {
            en: "Continental Breakfast Platter",
            ar: "طبق الإفطار الكونتيننتال"
        },
        category: "breakfast-continental",
        price: 15.99,
        description: {
            en: "Fresh croissants, Danish pastries, fresh fruit, yogurt, and coffee or tea",
            ar: "كرواسون طازج، معجنات دنماركية، فواكه طازجة، زبادي، وقهوة أو شاي"
        },
        image: "https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Vegetarian Available"],
            ar: ["متوفر نباتي"]
        }
    },
    {
        name: {
            en: "European Breakfast Board",
            ar: "لوح الإفطار الأوروبي"
        },
        category: "breakfast-continental",
        price: 18.99,
        description: {
            en: "Selection of cheeses, cold cuts, boiled egg, fresh bread, and butter",
            ar: "تشكيلة من الأجبان، اللحوم الباردة، بيض مسلوق، خبز طازج، وزبدة"
        },
        image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Protein Rich"],
            ar: ["غني بالبروتين"]
        }
    },

    // Breakfast - Arabic
    {
        name: {
            en: "Arabic Breakfast Feast",
            ar: "وليمة الإفطار العربي"
        },
        category: "breakfast-arabic",
        price: 22.99,
        description: {
            en: "Foul medames, falafel, hummus, labneh, olives, and fresh Arabic bread",
            ar: "فول مدمس، فلافل، حمص، لبنة، زيتون، وخبز عربي طازج"
        },
        image: "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Traditional", "Vegetarian"],
            ar: ["تقليدي", "نباتي"]
        }
    },

    // Lunch - Starters
    {
        name: {
            en: "Mediterranean Mezze Platter",
            ar: "طبق المقبلات المتوسطية"
        },
        category: "lunch-starters",
        price: 16.99,
        description: {
            en: "Hummus, babaganoush, tabbouleh, stuffed vine leaves, and pita bread",
            ar: "حمص، بابا غنوج، تبولة، ورق عنب، وخبز بيتا"
        },
        image: "https://images.unsplash.com/photo-1541518763669-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Vegetarian", "Sharing"],
            ar: ["نباتي", "للمشاركة"]
        }
    },

    // Lunch - Main Course
    {
        name: {
            en: "Business Lunch Special",
            ar: "غداء رجال الأعمال"
        },
        category: "lunch-main",
        price: 25.99,
        description: {
            en: "Grilled chicken breast, quinoa salad, roasted vegetables, and fresh juice",
            ar: "صدر دجاج مشوي، سلطة كينوا، خضروات مشوية، وعصير طازج"
        },
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Healthy", "Quick Service"],
            ar: ["صحي", "خدمة سريعة"]
        }
    },

    // Dinner - Appetizers
    {
        name: {
            en: "Truffle Arancini",
            ar: "كرات الأرز بالكمأة"
        },
        category: "dinner-appetizers",
        price: 14.99,
        description: {
            en: "Crispy risotto balls with black truffle and mozzarella center",
            ar: "كرات ريزوتو مقرمشة محشوة بالكمأة السوداء والموزاريلا"
        },
        image: "https://images.unsplash.com/photo-1541529086526-db283c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Vegetarian", "Signature"],
            ar: ["نباتي", "طبق مميز"]
        }
    },

    // Dinner - Main Course
    {
        name: {
            en: "Wagyu Ribeye Steak",
            ar: "ستيك واغيو ريب آي"
        },
        category: "dinner-main",
        price: 89.99,
        description: {
            en: "Premium grade Wagyu beef with truffle butter and seasonal vegetables",
            ar: "لحم واغيو فاخر مع زبدة الكمأة وخضروات موسمية"
        },
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Premium", "Chef's Choice"],
            ar: ["فاخر", "اختيار الشيف"]
        }
    },

    // Dinner - Chef's Specials
    {
        name: {
            en: "Lobster Thermidor",
            ar: "الكركند ثرميدور"
        },
        category: "dinner-specials",
        price: 75.99,
        description: {
            en: "Whole lobster with creamy cognac sauce, mushrooms, and gratin",
            ar: "كركند كامل مع صلصة الكونياك الكريمية، فطر، وغراتان"
        },
        image: "https://images.unsplash.com/photo-1553247407-23251ce81f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Signature", "Luxury"],
            ar: ["طبق مميز", "فاخر"]
        }
    },

    {
        name: {
            en: "Classic Caesar Salad",
            ar: "سلطة سيزر الكلاسيكية"
        },
        category: "starters",
        price: 12.99,
        description: {
            en: "Crisp romaine lettuce, parmesan cheese, croutons, and our house-made Caesar dressing",
            ar: "خس روماني مقرمش، جبنة بارميزان، خبز محمص، وصلصة سيزر محضرة منزلياً"
        },
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Vegetarian"],
            ar: ["نباتي"]
        }
    },
    {
        name: {
            en: "Grilled Salmon",
            ar: "سلمون مشوي"
        },
        category: "main",
        price: 24.99,
        description: {
            en: "Fresh Atlantic salmon with lemon butter sauce, served with seasonal vegetables",
            ar: "سلمون طازج مع صلصة الليمون والزبدة، يقدم مع خضروات موسمية"
        },
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Gluten-Free"],
            ar: ["خالي من الغلوتين"]
        }
    },
    {
        name: {
            en: "Chocolate Lava Cake",
            ar: "كيك الشوكولاتة البركاني"
        },
        category: "desserts",
        price: 8.99,
        description: {
            en: "Warm chocolate cake with a molten center, served with vanilla ice cream",
            ar: "كيك شوكولاتة دافئ مع مركز سائل، يقدم مع آيس كريم الفانيليا"
        },
        image: "https://images.unsplash.com/photo-1617455559706-fa196228c05d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Vegetarian"],
            ar: ["نباتي"]
        }
    },
    {
        name: {
            en: "Craft Mojito",
            ar: "موخيتو"
        },
        category: "drinks",
        price: 9.99,
        description: {
            en: "Fresh mint, lime juice, rum, and soda water",
            ar: "نعناع طازج، عصير ليمون، رم، وماء صودا"
        },
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Alcoholic"],
            ar: ["كحولي"]
        }
    },
    {
        name: {
            en: "Bruschetta",
            ar: "بروسكيتا"
        },
        category: "starters",
        price: 10.99,
        description: {
            en: "Toasted bread topped with fresh tomatoes, garlic, and basil",
            ar: "خبز محمص مغطى بطماطم طازجة، ثوم، وريحان"
        },
        image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Vegetarian"],
            ar: ["نباتي"]
        }
    },
    {
        name: {
            en: "Beef Tenderloin",
            ar: "فيليه لحم البقر"
        },
        category: "main",
        price: 34.99,
        description: {
            en: "8oz premium cut served with truffle mashed potatoes",
            ar: "قطعة فاخرة من 8 أوقية تقدم مع بطاطا مهروسة بالترفيل"
        },
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Gluten-Free"],
            ar: ["خالي من الغلوتين"]
        }
    },

    // Coffee Drinks
    {
        name: {
            en: "Arabic Coffee",
            ar: "قهوة عربية"
        },
        category: "drinks-coffee",
        price: 4.99,
        description: {
            en: "Traditional Arabic coffee with cardamom",
            ar: "قهوة عربية تقليدية بالهيل"
        },
        image: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Hot", "Traditional"],
            ar: ["ساخن", "تقليدي"]
        }
    },
    {
        name: {
            en: "Caramel Macchiato",
            ar: "كراميل ماكياتو"
        },
        category: "drinks-coffee",
        price: 5.99,
        description: {
            en: "Espresso with steamed milk and vanilla-caramel syrup",
            ar: "اسبريسو مع حليب مبخر وشراب الفانيليا والكراميل"
        },
        image: "https://images.unsplash.com/photo-1485808191679-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Hot/Iced", "Specialty"],
            ar: ["ساخن/مثلج", "مميز"]
        }
    },

    // Tea Selection
    {
        name: {
            en: "Moroccan Mint Tea",
            ar: "شاي مغربي بالنعناع"
        },
        category: "drinks-tea",
        price: 4.50,
        description: {
            en: "Green tea with fresh mint leaves and sugar",
            ar: "شاي أخضر مع أوراق النعناع الطازجة والسكر"
        },
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Hot", "Traditional"],
            ar: ["ساخن", "تقليدي"]
        }
    },
    {
        name: {
            en: "Earl Grey Tea",
            ar: "شاي إيرل غراي"
        },
        category: "drinks-tea",
        price: 4.25,
        description: {
            en: "Classic black tea flavored with oil of bergamot",
            ar: "شاي أسود كلاسيكي منكه بزيت البرغموت"
        },
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Hot/Iced"],
            ar: ["ساخن/مثلج"]
        }
    },

    // Fresh Juices
    {
        name: {
            en: "Fresh Orange Juice",
            ar: "عصير برتقال طازج"
        },
        category: "drinks-fresh",
        price: 5.50,
        description: {
            en: "Freshly squeezed orange juice",
            ar: "عصير برتقال طازج معصور"
        },
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Fresh", "Vitamin C"],
            ar: ["طازج", "فيتامين سي"]
        }
    },
    {
        name: {
            en: "Green Detox",
            ar: "ديتوكس أخضر"
        },
        category: "drinks-fresh",
        price: 6.99,
        description: {
            en: "Apple, celery, cucumber, spinach, and ginger",
            ar: "تفاح، كرفس، خيار، سبانخ، وزنجبيل"
        },
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Healthy", "Detox"],
            ar: ["صحي", "ديتوكس"]
        }
    },

    // Soft Drinks
    {
        name: {
            en: "Sparkling Water",
            ar: "مياه فوارة"
        },
        category: "drinks-soft",
        price: 3.50,
        description: {
            en: "Premium sparkling mineral water",
            ar: "مياه معدنية فوارة فاخرة"
        },
        image: "https://images.unsplash.com/photo-1603394151492-28730e473f78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Refreshing"],
            ar: ["منعش"]
        }
    },
    {
        name: {
            en: "Classic Cola",
            ar: "كولا كلاسيك"
        },
        category: "drinks-soft",
        price: 3.99,
        description: {
            en: "Chilled cola with ice",
            ar: "كولا باردة مع الثلج"
        },
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Cold", "Carbonated"],
            ar: ["بارد", "غازي"]
        }
    },

    // Mocktails
    {
        name: {
            en: "Virgin Mojito",
            ar: "موهيتو بدون كحول"
        },
        category: "drinks-cocktails",
        price: 7.99,
        description: {
            en: "Fresh lime, mint leaves, sugar syrup, and soda water",
            ar: "ليمون طازج، أوراق نعناع، شراب السكر، ومياه غازية"
        },
        image: "https://images.unsplash.com/photo-1604579659931-f42436a8368c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Refreshing", "Non-Alcoholic"],
            ar: ["منعش", "خالي من الكحول"]
        }
    },
    {
        name: {
            en: "Passion Fruit Punch",
            ar: "بانش فاكهة الباشن"
        },
        category: "drinks-cocktails",
        price: 8.99,
        description: {
            en: "Passion fruit, orange juice, sprite, and grenadine syrup",
            ar: "فاكهة الباشن، عصير برتقال، سبرايت، وشراب الرمان"
        },
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: {
            en: ["Sweet", "Tropical"],
            ar: ["حلو", "استوائي"]
        }
    }
];

// DOM Elements
const menuContainer = document.getElementById('menuItemsContainer');
const filterButtons = document.querySelectorAll('.menu-btn');
const navbarCollapse = document.querySelector('.navbar-collapse');
const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

// Debounce function to limit function calls
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

// Language toggle function with smooth transition
function toggleLanguage() {
    const html = document.documentElement;
    const currentDir = html.getAttribute('dir');
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    
    // Add transition class
    document.body.style.opacity = '0.7';
    
    setTimeout(() => {
        html.setAttribute('dir', newDir);
        localStorage.setItem('language', newDir);
        
        // Refresh menu display
        const activeCategory = document.querySelector('.menu-btn.active').getAttribute('data-category');
        displayMenuItems(activeCategory);
        
        // Restore opacity with a slight delay
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
    }, 200);
}

// Get current language
function getCurrentLanguage() {
    return document.documentElement.getAttribute('dir') === 'rtl' ? 'ar' : 'en';
}

// Create menu item HTML with optimized structure
function createMenuItemHTML(item) {
    const currentLang = getCurrentLanguage();
    const categoryLabel = getCategoryLabel(item.category, currentLang);
    
    return `
        <div class="swiper-slide">
            <div class="menu-item">
                <span class="category-label">${categoryLabel}</span>
                <img src="${item.image}" alt="${item.name[currentLang]}" class="menu-item-image" loading="lazy">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name[currentLang]}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-description">${item.description[currentLang]}</p>
                <div class="menu-item-tags">
                    ${item.tags[currentLang].map(tag => `
                        <span class="menu-item-tag">${tag}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Get category label based on category
function getCategoryLabel(category, lang) {
    const labels = {
        'breakfast-continental': { en: 'Continental', ar: 'إفطار كونتيننتال' },
        'breakfast-arabic': { en: 'Arabic Breakfast', ar: 'إفطار عربي' },
        'lunch-starters': { en: 'Lunch Starters', ar: 'مقبلات الغداء' },
        'lunch-main': { en: 'Lunch Main', ar: 'أطباق الغداء الرئيسية' },
        'dinner-appetizers': { en: 'Appetizers', ar: 'المقبلات' },
        'dinner-main': { en: 'Main Course', ar: 'الطبق الرئيسي' },
        'dinner-specials': { en: "Chef's Special", ar: 'طبق الشيف الخاص' },
        'drinks-coffee': { en: 'Coffee', ar: 'قهوة' },
        'drinks-tea': { en: 'Tea', ar: 'شاي' },
        'drinks-fresh': { en: 'Fresh Juice', ar: 'عصير طازج' },
        'drinks-soft': { en: 'Soft Drinks', ar: 'مشروبات غازية' },
        'drinks-cocktails': { en: 'Mocktails', ar: 'موكتيلات' },
        'desserts': { en: 'Desserts', ar: 'حلويات' }
    };
    
    return labels[category] ? labels[category][lang] : '';
}

// Display menu items with smooth transition
function displayMenuItems(category = 'all') {
    let filteredItems;

    if (category === 'all') {
        filteredItems = menuItems;
    } else {
        filteredItems = menuItems.filter(item => item.category === category);
    }

    menuContainer.innerHTML = filteredItems.map(item => createMenuItemHTML(item)).join('');
    
    // Initialize Swiper after updating content
    initSwiper();
}

// Initialize Swiper
function initSwiper() {
    const swiper = new Swiper('.menu-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
        },
        grabCursor: true,
        speed: 800,
        mousewheel: {
            invert: false,
        },
        keyboard: {
            enabled: true,
        },
        on: {
            init: function() {
                document.querySelector('.menu-swiper').style.opacity = '0';
                setTimeout(() => {
                    document.querySelector('.menu-swiper').style.transition = 'opacity 0.5s ease';
                    document.querySelector('.menu-swiper').style.opacity = '1';
                }, 100);
            },
            slideChangeTransitionStart: function() {
                const activeSlide = this.slides[this.activeIndex];
                if (activeSlide) {
                    activeSlide.style.transform = 'scale(0.9)';
                    activeSlide.style.transition = 'transform 0.5s ease';
                    setTimeout(() => {
                        activeSlide.style.transform = 'scale(1)';
                    }, 50);
                }
            }
        }
    });

    return swiper;
}

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Get category and update UI
        const category = button.getAttribute('data-category');
        
        // Update active state
        document.querySelector('.menu-btn.active')?.classList.remove('active');
        button.classList.add('active');
        
        // Display items
        requestAnimationFrame(() => {
            displayMenuItems(category);
            
            // Close navbar on mobile
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});

// Initialize with optimized loading
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        document.documentElement.setAttribute('dir', savedLanguage);
    }

    // Initial display with slight delay for smooth loading
    setTimeout(() => {
        displayMenuItems();
    }, 100);
});

// Optimize image loading
document.addEventListener('DOMContentLoaded', () => {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    }
});
