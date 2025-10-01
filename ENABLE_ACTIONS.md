# 🔧 Активация GitHub Actions

## ⚠️ Почему Actions не отображаются?

GitHub Actions могут быть отключены по умолчанию в новых репозиториях. Их нужно активировать вручную.

---

## ✅ Пошаговая инструкция:

### Шаг 1: Откройте настройки Actions

1. Откройте ваш репозиторий: https://github.com/Anubizze/prime
2. Нажмите на вкладку **Settings** (⚙️ справа вверху)
3. В левом меню выберите **Actions** → **General**

### Шаг 2: Разрешите запуск Actions

Найдите раздел **"Actions permissions"** и выберите:

```
⭕ Allow all actions and reusable workflows
```

Это разрешит запуск всех GitHub Actions в вашем репозитории.

### Шаг 3: Настройте права Workflow

Прокрутите вниз до раздела **"Workflow permissions"** и выберите:

```
⭕ Read and write permissions
✅ Allow GitHub Actions to create and approve pull requests
```

### Шаг 4: Сохраните изменения

Нажмите кнопку **Save** внизу страницы.

---

## 🚀 Запуск первого workflow

После активации Actions нужно их запустить:

### Вариант 1: Через интерфейс GitHub (рекомендуется)

1. Откройте: https://github.com/Anubizze/prime/actions
2. Выберите workflow **"CI - Code Quality Check"**
3. Нажмите **"Run workflow"** → Выберите ветку `main` → **"Run workflow"**
4. То же самое для **"Deploy to GitHub Pages"**

### Вариант 2: Через новый push

Просто сделайте любое небольшое изменение и push:

```powershell
# Добавьте пробел в любой файл, например:
git commit --allow-empty -m "Trigger GitHub Actions"
git push
```

---

## 🌐 Активация GitHub Pages

Обязательно активируйте GitHub Pages:

1. Откройте: https://github.com/Anubizze/prime/settings/pages
2. В разделе **"Build and deployment"**:
   - Source: выберите **"GitHub Actions"** ⭐
3. Сохраните изменения

После этого workflow **"Deploy to GitHub Pages"** будет работать автоматически!

---

## ✅ Проверка

После активации вы увидите:

### 1. На странице Actions:
https://github.com/Anubizze/prime/actions

Должны появиться 4 workflow:
- ✅ CI - Code Quality Check
- 🌐 Deploy to GitHub Pages
- 👋 Welcome Message
- 📊 Project Statistics

### 2. Запущенные tasks:
Вы увидите запущенные процессы с зелеными галочками ✅

### 3. Бейджи в README:
Бейджи будут показывать статус:
- ![Deploy](https://github.com/Anubizze/prime/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
- ![CI](https://github.com/Anubizze/prime/workflows/CI%20-%20Code%20Quality%20Check/badge.svg)

---

## 🔄 Что делать, если не работает?

### Проблема: "Actions disabled"
**Решение:** Следуйте инструкции выше, разрешите Actions в Settings

### Проблема: "No workflows found"
**Решение:** Убедитесь что файлы в папке `.github/workflows/` были загружены:
```powershell
git ls-files .github/workflows/
```

Должно показать:
```
.github/workflows/ci.yml
.github/workflows/deploy.yml
.github/workflows/greet.yml
.github/workflows/stats.yml
```

### Проблема: Workflow не запускается
**Решение:** Сделайте новый push:
```powershell
git commit --allow-empty -m "Trigger Actions"
git push
```

### Проблема: "Page build failed"
**Решение:** Убедитесь что выбрали **"GitHub Actions"** как source в Pages settings

---

## 📱 Быстрые ссылки

| Ссылка | Описание |
|--------|----------|
| [Settings → Actions](https://github.com/Anubizze/prime/settings/actions) | Настройки Actions |
| [Settings → Pages](https://github.com/Anubizze/prime/settings/pages) | Настройки Pages |
| [Actions Dashboard](https://github.com/Anubizze/prime/actions) | Просмотр workflows |
| [Workflows](https://github.com/Anubizze/prime/tree/main/.github/workflows) | Файлы workflows |

---

## 🎯 Чек-лист активации

Отметьте галочками после выполнения:

- [ ] Открыл Settings → Actions → General
- [ ] Выбрал "Allow all actions and reusable workflows"
- [ ] Выбрал "Read and write permissions"
- [ ] Нажал Save
- [ ] Открыл Settings → Pages
- [ ] Выбрал Source: "GitHub Actions"
- [ ] Перешел в Actions и увидел workflows
- [ ] Запустил workflow вручную или сделал push
- [ ] Проверил что workflow выполнился успешно ✅

---

## 🔍 Проверка статуса прямо сейчас

### В командной строке:

```powershell
# Проверить что workflows загружены
git ls-files .github/workflows/

# Посмотреть последние коммиты
git log --oneline -3

# Проверить удаленный репозиторий
git remote -v
```

### На GitHub:

1. **Actions**: https://github.com/Anubizze/prime/actions
2. **Settings**: https://github.com/Anubizze/prime/settings/actions
3. **Pages**: https://github.com/Anubizze/prime/settings/pages

---

## 💡 Полезные советы

### Запуск workflow вручную:
```yaml
# В файле workflow должно быть:
on:
  push:
    branches: [ main ]
  workflow_dispatch:  # ← Это позволяет запускать вручную
```

Все наши workflows уже имеют `workflow_dispatch`! ✅

### Просмотр логов:
1. Actions → Выберите workflow → Кликните на run → View logs

### Отладка:
Если что-то не работает, посмотрите логи - там будет подробная информация об ошибке.

---

## 🎉 После активации

Ваш сайт будет доступен по адресу:
```
https://anubizze.github.io/prime/login.html
```

И будет автоматически обновляться при каждом push! 🚀

---

**Следуйте инструкции выше, и через 5 минут все заработает!** ⚡

