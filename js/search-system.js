// Универсальная поисковая система PRIME360.AI
class SearchSystem {
    constructor() {
        this.searchData = {
            navigation: [
                { id: 'main', name: 'Главная', type: 'navigation', url: 'index.html', description: 'Основная страница системы' },
                { id: 'projects', name: 'Проекты', type: 'navigation', url: 'projects.html', description: 'Управление проектами' },
                { id: 'archive', name: 'Архив', type: 'navigation', url: 'archive.html', description: 'Архивные проекты' },
                { id: 'documents', name: 'Библиотека', type: 'navigation', url: 'documents.html', description: 'Документооборот' },
                { id: 'meetings', name: 'Совещания', type: 'navigation', url: 'meetings.html', description: 'Планирование встреч' },
                { id: 'finances', name: 'Финансы', type: 'navigation', url: 'finances.html', description: 'Финансовое планирование' },
                { id: 'schedule', name: 'Расписание', type: 'navigation', url: 'schedule.html', description: 'Календарь событий' },
                { id: 'tasks', name: 'Задачи', type: 'navigation', url: 'tasks.html', description: 'Управление задачами' },
                { id: 'analytics', name: 'Аналитика', type: 'navigation', url: 'analytics.html', description: 'Отчеты и аналитика' },
                { id: 'integrations', name: 'Интеграции', type: 'navigation', url: 'integrations.html', description: 'Внешние сервисы' },
                { id: 'ai-assistant', name: 'AI-ассистент', type: 'navigation', url: '#', description: 'Искусственный интеллект' }
            ],
            projects: [
                { id: 'zhk-progress', name: 'ЖК Прогресс', type: 'project', status: 'В работе', progress: 75, description: 'Жилой комплекс в центре города' },
                { id: 'astana-plaza', name: 'Астана Plaza', type: 'project', status: 'В работе', progress: 25, description: 'Торговый центр в Астане' },
                { id: 'office-center', name: 'Офисный центр', type: 'project', status: 'Планирование', progress: 15, description: 'Многоэтажный офисный комплекс' },
                { id: 'solar-station', name: 'Солнечная электростанция', type: 'project', status: 'Завершен', progress: 100, description: 'Энергетический проект' }
            ],
            documents: [
                { id: 'charter', name: 'Устав проекта', type: 'document', category: 'Основные документы', description: 'Основные документы проекта' },
                { id: 'schedule', name: 'График с отклонениями', type: 'document', category: 'Планирование', description: 'Временные рамки и этапы' },
                { id: 'budget', name: 'Таблицы фин.отчет', type: 'document', category: 'Финансы', description: 'Финансовое планирование' },
                { id: 'ird', name: 'Пересень ИРД для КВА', type: 'document', category: 'Техническая документация', description: 'Инженерно-техническая документация' }
            ],
            meetings: [
                { id: 'meeting-1', name: 'Планирование проекта ЖК Прогресс', type: 'meeting', date: '15.01.2025', participants: 8, description: 'Обсуждение этапов строительства' },
                { id: 'meeting-2', name: 'Обсуждение бюджета', type: 'meeting', date: '16.01.2025', participants: 5, description: 'Финансовое планирование' },
                { id: 'meeting-3', name: 'Техническое совещание', type: 'meeting', date: '17.01.2025', participants: 12, description: 'Технические вопросы проекта' }
            ],
            tasks: [
                { id: 'task-1', name: 'Завершить проект ЖК Прогресс', type: 'task', priority: 'high', status: 'В работе', description: 'Завершение строительства 3-го этажа' },
                { id: 'task-2', name: 'Подготовить отчет по Астана Plaza', type: 'task', priority: 'medium', status: 'В работе', description: 'Финансовый отчет за квартал' },
                { id: 'task-3', name: 'Провести совещание с командой', type: 'task', priority: 'low', status: 'Запланировано', description: 'Еженедельное совещание команды' }
            ]
        };
        
        this.init();
    }

    init() {
        this.setupSearchInputs();
        this.setupSearchHandlers();
        this.setupKeyboardShortcuts();
    }

    setupSearchInputs() {
        // Находим все поисковые поля на странице
        const searchInputs = document.querySelectorAll('#global-search, .search-input');
        searchInputs.forEach(input => {
            input.addEventListener('input', (e) => this.handleSearch(e));
            input.addEventListener('keypress', (e) => this.handleKeyPress(e));
            input.addEventListener('focus', (e) => this.showSuggestions(e));
        });
    }

    setupSearchHandlers() {
        // Добавляем обработчики для поисковых иконок
        const searchIcons = document.querySelectorAll('.search-icon');
        searchIcons.forEach(icon => {
            icon.addEventListener('click', (e) => this.performSearch(e));
        });
    }

    setupKeyboardShortcuts() {
        // Горячие клавиши для поиска
        document.addEventListener('keydown', (e) => {
            // Ctrl + K или Cmd + K для фокуса на поиск
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.focusSearch();
            }
            
            // Escape для закрытия результатов поиска
            if (e.key === 'Escape') {
                this.closeSearchResults();
            }
        });
    }

    focusSearch() {
        const searchInput = document.getElementById('global-search') || 
                           document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }

    closeSearchResults() {
        const modal = document.querySelector('.search-results-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
        this.hideSuggestions();
    }

    handleSearch(event) {
        const query = event.target.value.trim();
        if (query.length >= 2) {
            this.showSuggestions(event, query);
        } else {
            this.hideSuggestions();
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.performSearch(event);
        }
    }

    performSearch(event) {
        const searchInput = event.target.closest('.search-container')?.querySelector('.search-input') || 
                           event.target.closest('.search-container')?.querySelector('#global-search') ||
                           event.target;
        
        const query = searchInput.value.trim();
        if (query) {
            this.search(query);
        }
    }

    search(query) {
        const results = this.searchInData(query);
        this.displayResults(results, query);
    }

    searchInData(query) {
        const results = {
            navigation: [],
            projects: [],
            documents: [],
            meetings: [],
            tasks: [],
            total: 0
        };

        const searchTerms = query.toLowerCase().split(' ');

        // Поиск в навигации
        results.navigation = this.searchData.navigation.filter(item => 
            this.matchesSearch(item, searchTerms)
        );

        // Поиск в проектах
        results.projects = this.searchData.projects.filter(item => 
            this.matchesSearch(item, searchTerms)
        );

        // Поиск в документах
        results.documents = this.searchData.documents.filter(item => 
            this.matchesSearch(item, searchTerms)
        );

        // Поиск в совещаниях
        results.meetings = this.searchData.meetings.filter(item => 
            this.matchesSearch(item, searchTerms)
        );

        // Поиск в задачах
        results.tasks = this.searchData.tasks.filter(item => 
            this.matchesSearch(item, searchTerms)
        );

        results.total = results.navigation.length + results.projects.length + 
                       results.documents.length + results.meetings.length + 
                       results.tasks.length;

        return results;
    }

    matchesSearch(item, searchTerms) {
        const searchableText = [
            item.name,
            item.description,
            item.status,
            item.category,
            item.type
        ].join(' ').toLowerCase();

        return searchTerms.every(term => searchableText.includes(term));
    }

    showSuggestions(event, query = '') {
        const searchInput = event.target;
        
        // Удаляем существующие предложения
        this.hideSuggestions();
        
        if (query.length < 2) return;

        const suggestions = this.getSuggestions(query);
        if (suggestions.length === 0) return;

        // Создаем контейнер для предложений
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.innerHTML = this.renderSuggestions(suggestions);

        // Позиционируем относительно поискового поля
        const rect = searchInput.getBoundingClientRect();
        suggestionsContainer.style.position = 'fixed';
        suggestionsContainer.style.top = (rect.bottom + 8) + 'px';
        suggestionsContainer.style.left = rect.left + 'px';
        suggestionsContainer.style.width = Math.max(rect.width, 300) + 'px';

        // Добавляем в body для максимальной видимости
        document.body.appendChild(suggestionsContainer);

        // Добавляем обработчики кликов
        suggestionsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-item')) {
                const suggestion = e.target.dataset;
                this.selectSuggestion(suggestion, searchInput);
            }
        });

        // Добавляем обработчик клика вне предложений
        document.addEventListener('click', (e) => {
            if (!suggestionsContainer.contains(e.target) && e.target !== searchInput) {
                this.hideSuggestions();
            }
        });
    }

    getSuggestions(query) {
        const allItems = [
            ...this.searchData.navigation.map(item => ({ ...item, category: 'Навигация' })),
            ...this.searchData.projects.map(item => ({ ...item, category: 'Проекты' })),
            ...this.searchData.documents.map(item => ({ ...item, category: 'Документы' })),
            ...this.searchData.meetings.map(item => ({ ...item, category: 'Совещания' })),
            ...this.searchData.tasks.map(item => ({ ...item, category: 'Задачи' }))
        ];

        const searchTerms = query.toLowerCase().split(' ');
        return allItems
            .filter(item => this.matchesSearch(item, searchTerms))
            .slice(0, 6); // Показываем первые 6 результатов
    }

    renderSuggestions(suggestions) {
        return suggestions.map(item => `
            <div class="suggestion-item" data-type="${item.type}" data-id="${item.id}" data-name="${item.name}">
                <div class="suggestion-icon">${this.getTypeIcon(item.type)}</div>
                <div class="suggestion-content">
                    <div class="suggestion-title">${this.highlightMatch(item.name, suggestions[0]?.name || '')}</div>
                    <div class="suggestion-category">${item.category}</div>
                </div>
            </div>
        `).join('');
    }

    getTypeIcon(type) {
        const icons = {
            navigation: '🧭',
            project: '📁',
            document: '📄',
            meeting: '💬',
            task: '✅'
        };
        return icons[type] || '📋';
    }

    highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    selectSuggestion(suggestion, searchInput) {
        searchInput.value = suggestion.name;
        this.hideSuggestions();
        this.search(suggestion.name);
    }

    hideSuggestions() {
        const existingSuggestions = document.querySelectorAll('.search-suggestions');
        existingSuggestions.forEach(suggestion => {
            suggestion.style.opacity = '0';
            suggestion.style.transform = 'translateY(-10px)';
            setTimeout(() => suggestion.remove(), 200);
        });
    }

    displayResults(results, query) {
        // Создаем модальное окно с результатами поиска
        const modal = this.createSearchResultsModal(results, query);
        document.body.appendChild(modal);
        
        // Показываем модальное окно
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    createSearchResultsModal(results, query) {
        const modal = document.createElement('div');
        modal.className = 'search-results-modal';
        modal.innerHTML = `
            <div class="search-results-content">
                <div class="search-results-header">
                    <h2>Результаты поиска: "${query}"</h2>
                    <button class="close-search-results" onclick="this.closest('.search-results-modal').remove(); document.body.style.overflow = 'auto';">×</button>
                </div>
                <div class="search-results-body">
                    ${this.renderSearchResults(results)}
                </div>
            </div>
        `;

        // Добавляем обработчик клика вне модального окна
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        });

        return modal;
    }

    renderSearchResults(results) {
        let html = `<div class="search-summary">Найдено результатов: ${results.total}</div>`;

        if (results.navigation.length > 0) {
            html += `
                <div class="search-section">
                    <h3>🧭 Навигация (${results.navigation.length})</h3>
                    <div class="search-items">
                        ${results.navigation.map(item => this.renderSearchItem(item)).join('')}
                    </div>
                </div>
            `;
        }

        if (results.projects.length > 0) {
            html += `
                <div class="search-section">
                    <h3>📁 Проекты (${results.projects.length})</h3>
                    <div class="search-items">
                        ${results.projects.map(item => this.renderSearchItem(item)).join('')}
                    </div>
                </div>
            `;
        }

        if (results.documents.length > 0) {
            html += `
                <div class="search-section">
                    <h3>📄 Документы (${results.documents.length})</h3>
                    <div class="search-items">
                        ${results.documents.map(item => this.renderSearchItem(item)).join('')}
                    </div>
                </div>
            `;
        }

        if (results.meetings.length > 0) {
            html += `
                <div class="search-section">
                    <h3>💬 Совещания (${results.meetings.length})</h3>
                    <div class="search-items">
                        ${results.meetings.map(item => this.renderSearchItem(item)).join('')}
                    </div>
                </div>
            `;
        }

        if (results.tasks.length > 0) {
            html += `
                <div class="search-section">
                    <h3>✅ Задачи (${results.tasks.length})</h3>
                    <div class="search-items">
                        ${results.tasks.map(item => this.renderSearchItem(item)).join('')}
                    </div>
                </div>
            `;
        }

        if (results.total === 0) {
            html = `
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h3>Ничего не найдено</h3>
                    <p>Попробуйте изменить поисковый запрос или использовать другие ключевые слова.</p>
                </div>
            `;
        }

        return html;
    }

    renderSearchItem(item) {
        const statusClass = item.status ? `status-${item.status.toLowerCase().replace(' ', '-')}` : '';
        const progressBar = item.progress ? `<div class="progress-bar"><div class="progress-fill" style="width: ${item.progress}%"></div></div>` : '';
        
        return `
            <div class="search-item" onclick="searchSystem.openItem('${item.type}', '${item.id}')">
                <div class="search-item-icon">${this.getTypeIcon(item.type)}</div>
                <div class="search-item-content">
                    <div class="search-item-title">${item.name}</div>
                    <div class="search-item-description">${item.description}</div>
                    ${item.status ? `<div class="search-item-status ${statusClass}">${item.status}</div>` : ''}
                    ${progressBar}
                </div>
                <div class="search-item-arrow">→</div>
            </div>
        `;
    }

    openItem(type, id) {
        // Закрываем модальное окно
        const modal = document.querySelector('.search-results-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }

        // Навигация к элементу
        switch (type) {
            case 'navigation':
                this.openNavigation(id);
                break;
            case 'project':
                this.openProject(id);
                break;
            case 'document':
                this.openDocument(id);
                break;
            case 'meeting':
                this.openMeeting(id);
                break;
            case 'task':
                this.openTask(id);
                break;
        }
    }

    openNavigation(id) {
        const navigationItem = this.searchData.navigation.find(item => item.id === id);
        if (navigationItem) {
            if (navigationItem.url === '#') {
                // Для AI-ассистента вызываем функцию открытия чата
                if (typeof toggleAIChat === 'function') {
                    toggleAIChat();
                }
            } else {
                window.location.href = navigationItem.url;
            }
        }
    }

    openProject(id) {
        const projectPages = {
            'zhk-progress': 'project-zhk-progress.html',
            'astana-plaza': 'project-astana-plaza.html',
            'office-center': 'project-office-center.html',
            'solar-station': 'project-detail.html'
        };
        
        const page = projectPages[id];
        if (page) {
            window.location.href = page;
        } else {
            window.location.href = 'projects.html';
        }
    }

    openDocument(id) {
        window.location.href = 'documents.html';
    }

    openMeeting(id) {
        window.location.href = 'meetings.html';
    }

    openTask(id) {
        window.location.href = 'projects.html';
    }
}

// Инициализация поисковой системы
let searchSystem;

document.addEventListener('DOMContentLoaded', function() {
    searchSystem = new SearchSystem();
});

// Глобальные функции для совместимости
function performGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    if (searchInput && searchInput.value.trim()) {
        searchSystem.search(searchInput.value.trim());
    }
}

function clearSearch() {
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.value = '';
        searchSystem.hideSuggestions();
    }
}
