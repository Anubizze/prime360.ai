# 🛠️ Исправление ошибки GitHub Pages

## ❌ Проблема
Ошибка в GitHub Actions: `Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions`

## ✅ Решение

### 1. Настройте GitHub Pages в репозитории

1. **Откройте настройки репозитория:**
   ```
   https://github.com/Anubizze/prime/settings/pages
   ```

2. **В разделе "Build and deployment":**
   - **Source**: выберите `GitHub Actions` (НЕ "Deploy from a branch")
   - Это позволит использовать workflow файл для развертывания

3. **Нажмите "Save"**

### 2. Workflow файл исправлен

Я обновил файл `.github/workflows/deploy.yml` и добавил:
- `environment: github-pages` - правильная среда для Pages
- `enablement: true` - автоматическая активация Pages
- URL переменную для отображения ссылки на сайт

### 3. Проверьте результат

После настройки:
1. **Запустится автоматический workflow** при следующем push
2. **Или запустите вручную:** Actions → Deploy to GitHub Pages → Run workflow

### 4. Ваш сайт будет доступен по адресу:
```
https://anubizze.github.io/prime/login.html
```

## 🔄 Что делать дальше

1. **Настройте Pages** в настройках репозитория (шаг 1 выше)
2. **Сделайте коммит** с обновленным workflow:
   ```powershell
   git add .
   git commit -m "Fix GitHub Pages deployment workflow"
   git push
   ```
3. **Проверьте Actions** - должен запуститься новый workflow
4. **Дождитесь завершения** и проверьте ваш сайт

## 📋 Проверочный список

- [ ] Настроены GitHub Pages (Source: GitHub Actions)
- [ ] Workflow файл обновлен
- [ ] Изменения загружены на GitHub
- [ ] Workflow запустился успешно
- [ ] Сайт доступен по ссылке

## 🆘 Если проблема остается

1. **Проверьте права доступа:**
   - Settings → Actions → General → Workflow permissions
   - Должно быть: "Read and write permissions"

2. **Проверьте ветку:**
   - Убедитесь что вы работаете с веткой `main`
   - Workflow настроен только на `main`

3. **Очистите кеш:**
   - Actions → Deploy to GitHub Pages → Re-run all jobs

## 🎯 Ожидаемый результат

После исправления:
- ✅ Workflow запускается без ошибок
- ✅ Сайт развертывается автоматически
- ✅ Доступен по адресу: `https://anubizze.github.io/prime/login.html`

---
**Время исправления:** ~5 минут  
**Статус:** Готово к применению 🚀
