# 🚀 GitHub Actions - Автоматизация PRIME360.AI

## ✨ Настроенные Workflows

В проекте настроены 4 автоматических процесса (GitHub Actions):

---

## 1. 🌐 Deploy to GitHub Pages

**Файл**: `.github/workflows/deploy.yml`

### Что делает:
- Автоматически деплоит ваш сайт на GitHub Pages
- Запускается при каждом push в ветку `main`
- Можно запустить вручную

### Как работает:
1. Забирает код из репозитория
2. Настраивает GitHub Pages
3. Загружает все файлы
4. Деплоит на `https://anubizze.github.io/prime360.ai/`

### Когда запускается:
- ✅ При push в ветку `main`
- ✅ Вручную через Actions → Deploy to GitHub Pages → Run workflow

### Как активировать:
1. Откройте: https://github.com/Anubizze/prime360.ai/settings/pages
2. Source: **GitHub Actions**
3. Workflow будет работать автоматически!

---

## 2. ✅ CI - Code Quality Check

**Файл**: `.github/workflows/ci.yml`

### Что делает:
- Проверяет качество кода
- Подсчитывает файлы и строки кода
- Валидирует структуру проекта

### Проверки:
- ✓ Наличие всех HTML файлов
- ✓ Наличие CSS файлов
- ✓ Наличие JavaScript файлов
- ✓ Валидация структуры папок
- ✓ Проверка обязательных файлов

### Когда запускается:
- ✅ При push в ветки `main` или `develop`
- ✅ При создании Pull Request

### Что показывает:
```
📊 Project Statistics:
HTML files: 9
CSS files: 10
JS files: 1
Total lines of code: 7349
```

---

## 3. 👋 Welcome Message

**Файл**: `.github/workflows/greet.yml`

### Что делает:
- Автоматически приветствует новых участников
- Отправляет welcome сообщение при первом issue
- Благодарит за первый Pull Request

### Когда запускается:
- ✅ Когда кто-то создает свой первый issue
- ✅ Когда кто-то создает свой первый PR

### Сообщения:
- 👋 Приветствие на русском языке
- 📚 Ссылка на документацию
- ✅ Чек-лист для PR

---

## 4. 📊 Project Statistics

**Файл**: `.github/workflows/stats.yml`

### Что делает:
- Собирает статистику проекта
- Подсчитывает файлы и строки кода
- Создает отчет

### Когда запускается:
- ✅ Каждое воскресенье в полночь (автоматически)
- ✅ Вручную через Actions → Project Statistics → Run workflow

### Что генерирует:
- Количество файлов каждого типа
- Общее количество строк кода
- Список всех файлов проекта
- Дата и время создания отчета

### Где найти результат:
1. Actions → Project Statistics → Latest run
2. Artifacts → `project-stats` → Скачать

---

## 📋 Как просмотреть Actions

### Способ 1: Через GitHub
1. Откройте: https://github.com/Anubizze/prime360.ai/actions
2. Увидите список всех workflows
3. Нажмите на любой для просмотра деталей

### Способ 2: Через бейдж
Добавьте в README.md:

```markdown
![Deploy](https://github.com/Anubizze/prime360.ai/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![CI](https://github.com/Anubizze/prime360.ai/workflows/CI%20-%20Code%20Quality%20Check/badge.svg)
```

Результат:
![Deploy](https://github.com/Anubizze/prime360.ai/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![CI](https://github.com/Anubizze/prime360.ai/workflows/CI%20-%20Code%20Quality%20Check/badge.svg)

---

## 🎯 Запуск вручную

### Деплой:
1. Actions → **Deploy to GitHub Pages**
2. Run workflow → Выберите ветку `main` → **Run workflow**

### Статистика:
1. Actions → **Project Statistics**
2. Run workflow → Выберите ветку `main` → **Run workflow**

---

## 🔧 Структура workflows

```
.github/
└── workflows/
    ├── deploy.yml      # Автодеплой на GitHub Pages
    ├── ci.yml          # Проверка качества кода
    ├── greet.yml       # Приветствие участников
    └── stats.yml       # Статистика проекта
```

---

## 📊 Мониторинг

### Проверка статуса:
```bash
# Локально
git log --oneline

# На GitHub
https://github.com/Anubizze/prime360.ai/actions
```

### Notifications:
- ✅ Email уведомления при ошибках
- ✅ Статусы в PR
- ✅ Бейджи в README

---

## 🚀 Что происходит автоматически

### При каждом push в main:
1. 🔄 **CI проверяет** качество кода
2. 🌐 **Deploy загружает** сайт на GitHub Pages
3. ✅ **Статус** отображается в коммите

### Еженедельно:
1. 📊 **Генерируется статистика** проекта
2. 📁 **Создается артефакт** с отчетом
3. 💾 **Сохраняется на 30 дней**

### При создании issue/PR:
1. 👋 **Приветствие** новых участников
2. 📚 **Ссылки на документацию**
3. ✅ **Чек-листы** для PR

---

## 💡 Расширение функционала

### Добавить больше проверок:

**Валидация HTML**:
```yaml
- name: Validate HTML
  run: npm install -g html-validate && html-validate "**/*.html"
```

**Проверка CSS**:
```yaml
- name: Lint CSS
  run: npm install -g stylelint && stylelint "css/**/*.css"
```

**Проверка JavaScript**:
```yaml
- name: Lint JS
  run: npm install -g eslint && eslint "js/**/*.js"
```

---

## 🔐 Настройки безопасности

### Permissions:
Workflows имеют минимальные необходимые права:
- `contents: read` - Чтение кода
- `pages: write` - Запись на Pages
- `id-token: write` - Токены для деплоя

### Secrets:
- `GITHUB_TOKEN` - автоматически предоставляется GitHub
- Не требует дополнительных секретов

---

## 📈 Производительность

### Время выполнения:
- **Deploy**: ~30 секунд
- **CI**: ~15 секунд
- **Greet**: ~5 секунд
- **Stats**: ~10 секунд

### Лимиты GitHub Actions:
- **Public репозитории**: Безлимитно ✅
- **Private репозитории**: 2000 минут/месяц

---

## ❓ Частые вопросы

### Q: Как отключить workflow?
A: Settings → Actions → Disable или удалить `.yml` файл

### Q: Почему Actions не запускаются?
A: Проверьте Settings → Actions → Allow all actions

### Q: Можно ли запускать только определенные Actions?
A: Да, используйте `workflow_dispatch` для ручного запуска

### Q: Как посмотреть логи?
A: Actions → Выберите workflow → Выберите run → Просмотр шагов

---

## 🎉 Готово!

Ваш проект теперь имеет полную автоматизацию через GitHub Actions:

- ✅ Автоматический деплой
- ✅ Проверка качества кода
- ✅ Приветствие участников
- ✅ Статистика проекта

**Все работает автоматически после push на GitHub! 🚀**

---

## 📚 Полезные ссылки

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Actions Marketplace](https://github.com/marketplace?type=actions)
- [Ваши Actions](https://github.com/Anubizze/prime360.ai/actions)

---

**PRIME360.AI** - Автоматизация на максимум! ⚡

