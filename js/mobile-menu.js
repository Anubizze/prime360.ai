// Мобильное меню для PRIME360.AI

class MobileMenu {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createBurgerMenu();
        this.setupEventListeners();
        this.setupOverlay();
    }

    createBurgerMenu() {
        // Проверяем, есть ли уже бургер меню
        if (document.querySelector('.burger-menu')) {
            return;
        }

        // Создаем бургер меню
        const burgerMenu = document.createElement('button');
        burgerMenu.className = 'burger-menu';
        burgerMenu.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        burgerMenu.setAttribute('aria-label', 'Открыть меню');
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.setAttribute('type', 'button');

        // Добавляем в начало body
        document.body.insertBefore(burgerMenu, document.body.firstChild);
        
        // Добавляем стили для скрытия на десктопе
        const style = document.createElement('style');
        style.textContent = `
            .burger-menu {
                display: none;
            }
            
            @media (max-width: 1023px) {
                .burger-menu {
                    display: flex !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        const burgerMenu = document.querySelector('.burger-menu');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('mobileOverlay');

        if (burgerMenu) {
            burgerMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
            });
        }

        // Закрытие меню при клике на overlay
        if (overlay) {
            overlay.addEventListener('click', () => {
                this.closeMenu();
            });
        }

        // Закрытие меню при клике на пункт меню
        if (sidebar) {
            sidebar.addEventListener('click', (e) => {
                if (e.target.classList.contains('menu-item')) {
                    this.closeMenu();
                }
            });
        }

        // Закрытие меню при изменении размера экрана
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1023) {
                this.closeMenu();
            }
        });

        // Закрытие меню при нажатии Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
    }

    setupOverlay() {
        // Проверяем, есть ли уже overlay
        if (document.getElementById('mobileOverlay')) {
            return;
        }

        // Создаем overlay
        const overlay = document.createElement('div');
        overlay.id = 'mobileOverlay';
        overlay.className = 'mobile-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            display: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        document.body.appendChild(overlay);
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        const sidebar = document.querySelector('.sidebar');
        const burgerMenu = document.querySelector('.burger-menu');
        const overlay = document.getElementById('mobileOverlay');

        if (!sidebar || !burgerMenu || !overlay) {
            return;
        }

        this.isOpen = true;

        // Открываем sidebar
        sidebar.classList.add('open');
        sidebar.style.left = '0';
        sidebar.style.transition = 'left 0.3s ease';

        // Показываем overlay
        overlay.style.display = 'block';
        overlay.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);

        // Анимируем бургер меню
        burgerMenu.classList.add('active');
        burgerMenu.setAttribute('aria-expanded', 'true');
        burgerMenu.setAttribute('aria-label', 'Закрыть меню');

        // Блокируем скролл body
        document.body.style.overflow = 'hidden';

        // Добавляем класс для анимации
        document.body.classList.add('menu-open');
        
        // Фокус на первый элемент меню для доступности
        const firstMenuItem = sidebar.querySelector('.menu-item');
        if (firstMenuItem) {
            setTimeout(() => {
                firstMenuItem.focus();
            }, 300);
        }
    }

    closeMenu() {
        const sidebar = document.querySelector('.sidebar');
        const burgerMenu = document.querySelector('.burger-menu');
        const overlay = document.getElementById('mobileOverlay');

        if (!sidebar || !burgerMenu || !overlay) {
            return;
        }

        this.isOpen = false;

        // Закрываем sidebar
        sidebar.classList.remove('open');
        sidebar.style.left = '-100%';
        sidebar.style.transition = 'left 0.3s ease';

        // Скрываем overlay
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);

        // Возвращаем бургер меню в исходное состояние
        burgerMenu.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.setAttribute('aria-label', 'Открыть меню');

        // Разблокируем скролл body
        document.body.style.overflow = '';

        // Убираем класс
        document.body.classList.remove('menu-open');
        
        // Возвращаем фокус на бургер меню
        burgerMenu.focus();
    }

    // Метод для программного открытия/закрытия
    setMenuState(open) {
        if (open) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }

    // Метод для проверки состояния
    isMenuOpen() {
        return this.isOpen;
    }
}

// Инициализация мобильного меню
let mobileMenu;

document.addEventListener('DOMContentLoaded', function() {
    mobileMenu = new MobileMenu();
});

// Глобальные функции для совместимости
function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.toggleMenu();
    }
}

function openMobileMenu() {
    if (mobileMenu) {
        mobileMenu.openMenu();
    }
}

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.closeMenu();
    }
}

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileMenu;
}
