// Централизованное хранилище данных для всего приложения
const DataManager = {
    // Активности
    activities: [
        {
            id: 1,
            type: 'task',
            icon: '📝',
            iconColor: 'blue',
            title: 'Новая задача создана',
            description: '"Проверить качество бетона на объекте"',
            project: 'ЖК Прогресс',
            assignee: 'Айгун Ахметова',
            priority: 'high',
            deadline: '15 октября 2025',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 часа назад
            isNew: true
        },
        {
            id: 2,
            type: 'meeting',
            icon: '💬',
            iconColor: 'green',
            title: 'Совещание завершено',
            description: '"Еженедельный план работ"',
            project: 'ЖК Прогресс',
            participants: 8,
            duration: '1 час 30 минут',
            timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 часа назад
            isNew: false
        },
        {
            id: 3,
            type: 'document',
            icon: '📄',
            iconColor: 'purple',
            title: 'Документ обновлен',
            description: '"Техническое задание v2.1"',
            project: 'ЖК Прогресс',
            author: 'Инженер Петров',
            version: '2.1',
            timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // вчера
            isNew: false
        },
        {
            id: 4,
            type: 'payment',
            icon: '💵',
            iconColor: 'orange',
            title: 'Платеж выполнен',
            description: '"Оплата подрядчику ₸450,000"',
            project: 'Астана Plaza',
            recipient: 'ООО "СтройМастер"',
            amount: 450000,
            timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 дня назад
            isNew: false
        },
        {
            id: 5,
            type: 'project',
            icon: '🎯',
            iconColor: 'teal',
            title: 'Проект запущен',
            description: '"ЖК Прогресс - Этап 2"',
            project: 'ЖК Прогресс',
            manager: 'Айгун Ахметова',
            budget: 12500000,
            timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 дня назад
            isNew: false
        }
    ],

    // Задачи
    tasks: [
        {
            id: 1,
            title: 'Проверить качество бетона на объекте',
            project: 'ЖК Прогресс',
            projectColor: '#70B8B8',
            assignee: 'Айгун Ахметова',
            priority: 'high',
            status: 'urgent',
            deadline: '15 октября 2025',
            progress: 33,
            description: 'Провести полную проверку качества бетона на 3-м этаже.',
            createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
        },
        {
            id: 2,
            title: 'Согласовать проект вентиляции',
            project: 'Астана Plaza',
            projectColor: '#10b981',
            assignee: 'Инженер Петров',
            priority: 'medium',
            status: 'today',
            deadline: '1 октября 2025',
            progress: 60,
            description: 'Согласовать техническую документацию по вентиляции.',
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
        }
    ],

    // Совещания
    meetings: [
        {
            id: 1,
            title: 'Еженедельный план работ',
            date: '1 октября 2025, 10:00',
            duration: '1 час 30 минут',
            participants: 8,
            location: 'Офис, зал А',
            status: 'completed',
            agenda: [
                'Обзор выполненных работ за неделю',
                'Планирование задач на следующую неделю',
                'Обсуждение проблемных вопросов',
                'Распределение ресурсов'
            ],
            protocol: 'Совещание прошло успешно. Все задачи распределены.',
            createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000)
        }
    ],

    // Документы
    documents: [
        {
            id: 1,
            title: 'Техническое задание v2.1',
            project: 'ЖК Прогресс',
            author: 'Инженер Петров',
            version: '2.1',
            size: '2.4 МБ',
            updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
            changes: [
                { type: 'added', text: 'Добавлены требования к вентиляции' },
                { type: 'modified', text: 'Обновлены спецификации материалов' },
                { type: 'added', text: 'Добавлены схемы электропроводки' },
                { type: 'removed', text: 'Удалены устаревшие разделы' }
            ],
            tags: ['Техническая документация', 'ЖК Прогресс', 'Строительство']
        }
    ],

    // Платежи
    payments: [
        {
            id: 1,
            title: 'Оплата подрядчику',
            amount: 450000,
            recipient: 'ООО "СтройМастер"',
            project: 'Астана Plaza',
            date: '29 сентября 2025',
            method: 'Банковский перевод',
            purpose: 'Оплата за выполненные работы по возведению каркаса здания',
            status: 'success',
            timeline: [
                { status: 'created', title: 'Заявка создана', time: '28.09.2025 14:30', completed: true },
                { status: 'approved', title: 'Согласовано', time: '29.09.2025 09:15', completed: true },
                { status: 'paid', title: 'Оплачено', time: '29.09.2025 11:45', completed: true }
            ],
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        }
    ],

    // Проекты
    projects: [
        {
            id: 1,
            name: 'ЖК Прогресс',
            color: '#70B8B8',
            status: 'active',
            progress: 85,
            manager: 'Айгун Ахметова',
            budget: 12500000,
            startDate: '28 сентября 2025',
            endDate: '15 марта 2026',
            description: 'Второй этап строительства жилого комплекса',
            tasks: { completed: 12, total: 23 },
            team: 15
        },
        {
            id: 2,
            name: 'Астана Plaza',
            color: '#10b981',
            status: 'active',
            progress: 80,
            manager: 'Менеджер 2',
            budget: 15000000,
            startDate: '1 июня 2025',
            endDate: '1 декабря 2025',
            description: 'Строительство торгового центра',
            tasks: { completed: 45, total: 60 },
            team: 20
        }
    ],

    // Утилиты
    formatTimeAgo(timestamp) {
        const now = new Date();
        const diff = now - timestamp;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (hours < 1) return 'только что';
        if (hours < 24) return `${hours} ${this.plural(hours, 'час', 'часа', 'часов')} назад`;
        if (days === 1) return 'вчера';
        if (days < 7) return `${days} ${this.plural(days, 'день', 'дня', 'дней')} назад`;
        return timestamp.toLocaleDateString('ru-RU');
    },

    plural(n, one, two, five) {
        n = Math.abs(n) % 100;
        const n1 = n % 10;
        if (n > 10 && n < 20) return five;
        if (n1 > 1 && n1 < 5) return two;
        if (n1 === 1) return one;
        return five;
    },

    // Получить последние активности
    getRecentActivities(limit = 5) {
        return this.activities
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, limit);
    },

    // Сохранить в localStorage
    save() {
        localStorage.setItem('primeData', JSON.stringify({
            activities: this.activities,
            tasks: this.tasks,
            meetings: this.meetings,
            documents: this.documents,
            payments: this.payments,
            projects: this.projects
        }));
    },

    // Загрузить из localStorage
    load() {
        const data = localStorage.getItem('primeData');
        if (data) {
            const parsed = JSON.parse(data);
            // Преобразовать строки обратно в Date
            parsed.activities.forEach(a => a.timestamp = new Date(a.timestamp));
            parsed.tasks.forEach(t => t.createdAt = new Date(t.createdAt));
            Object.assign(this, parsed);
        }
    },

    // Добавить новую активность
    addActivity(activity) {
        activity.id = this.activities.length + 1;
        activity.timestamp = new Date();
        this.activities.unshift(activity);
        this.save();
    }
};

// Загрузить данные при запуске
DataManager.load();

