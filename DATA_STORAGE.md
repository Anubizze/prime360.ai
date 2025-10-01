# 💾 Хранение данных в PRIME360.AI

## ✅ Да, логины и пароли сохраняются!

### 📍 Где хранятся данные?

Все данные пользователей сохраняются в **localStorage** вашего браузера:

```javascript
// Строка 222-246 в register.html
let users = JSON.parse(localStorage.getItem('users') || '[]');

const newUser = {
    id: Date.now(),
    firstName: "Иван",
    lastName: "Петров",
    email: "ivan@example.com",
    username: "ivan_petrov",
    password: "password123",  // ⚠️ В открытом виде!
    role: "PM / Админ",
    createdAt: "2024-10-01T12:00:00.000Z"
};

users.push(newUser);
localStorage.setItem('users', JSON.stringify(users));
```

---

## 🔍 Как это работает?

### 1. **Регистрация** (register.html):
- Вы заполняете форму
- Данные сохраняются в `localStorage.users`
- Вы автоматически входите в систему

### 2. **Вход** (login.html):
- Система ищет ваш логин в `localStorage.users`
- Сравнивает пароль
- При совпадении - вход выполнен

### 3. **Профиль** (все страницы):
- Текущий пользователь хранится в `localStorage.currentUser`
- Имя и роль загружаются из этих данных

---

## 👀 Как посмотреть свои данные?

### Способ 1: Консоль браузера (F12)

1. Откройте любую страницу сайта
2. Нажмите **F12** (откроется консоль)
3. Перейдите на вкладку **Console**
4. Введите команды:

```javascript
// Посмотреть всех зарегистрированных пользователей
console.log(JSON.parse(localStorage.getItem('users')));

// Посмотреть текущего пользователя
console.log(JSON.parse(localStorage.getItem('currentUser')));

// Красиво вывести всех пользователей
console.table(JSON.parse(localStorage.getItem('users')));
```

### Способ 2: DevTools → Application

1. Откройте **F12**
2. Перейдите на вкладку **Application**
3. В левом меню: **Storage** → **Local Storage** → выберите ваш домен
4. Найдите ключ `users` - там все пользователи!

---

## 📊 Структура сохраненных данных

### localStorage.users (все пользователи):
```json
[
  {
    "id": 1633024800000,
    "firstName": "Иван",
    "lastName": "Петров",
    "email": "ivan@example.com",
    "username": "ivan_petrov",
    "password": "mypassword123",
    "role": "PM / Админ",
    "createdAt": "2024-10-01T12:00:00.000Z"
  },
  {
    "id": 1633024900000,
    "firstName": "Мария",
    "lastName": "Иванова",
    "email": "maria@example.com",
    "username": "maria_i",
    "password": "securepass456",
    "role": "Архитектор",
    "createdAt": "2024-10-01T12:05:00.000Z"
  }
]
```

### localStorage.currentUser (текущий пользователь):
```json
{
  "id": 1633024800000,
  "firstName": "Иван",
  "lastName": "Петров",
  "email": "ivan@example.com",
  "username": "ivan_petrov",
  "role": "PM / Админ"
}
```

### localStorage.isLoggedIn:
```
"true"  // или отсутствует, если не авторизован
```

---

## ⚠️ Важные ограничения

### 1. **Локальное хранилище**
- ✅ Данные сохраняются **только в вашем браузере**
- ❌ Другие люди **НЕ увидят** ваших пользователей
- ❌ На другом компьютере данные **НЕ доступны**
- ❌ При очистке кэша браузера данные **УДАЛЯТСЯ**

### 2. **Пароли в открытом виде**
```javascript
password: "password123"  // ⚠️ Не зашифрован!
```
- ⚠️ Пароли хранятся **без шифрования**
- ⚠️ Любой может посмотреть в консоли
- ⚠️ **Только для демо!** Не используйте реальные пароли!

### 3. **Лимит хранилища**
- localStorage ограничен **5-10 MB**
- Для большого количества пользователей может не хватить

### 4. **Безопасность**
- ❌ Нет защиты от XSS атак
- ❌ Нет валидации на сервере
- ❌ Нет резервных копий

---

## 🛠️ Управление данными

### Посмотреть всех пользователей:
```javascript
let users = JSON.parse(localStorage.getItem('users'));
console.table(users);
```

### Добавить пользователя вручную:
```javascript
let users = JSON.parse(localStorage.getItem('users') || '[]');
users.push({
    id: Date.now(),
    firstName: "Новый",
    lastName: "Пользователь",
    email: "new@example.com",
    username: "newuser",
    password: "password123",
    role: "PM",
    createdAt: new Date().toISOString()
});
localStorage.setItem('users', JSON.stringify(users));
console.log("Пользователь добавлен!");
```

### Удалить пользователя:
```javascript
let users = JSON.parse(localStorage.getItem('users'));
users = users.filter(u => u.username !== 'ivan_petrov');
localStorage.setItem('users', JSON.stringify(users));
console.log("Пользователь удален!");
```

### Изменить пароль:
```javascript
let users = JSON.parse(localStorage.getItem('users'));
let user = users.find(u => u.username === 'ivan_petrov');
if (user) {
    user.password = 'newpassword123';
    localStorage.setItem('users', JSON.stringify(users));
    console.log("Пароль изменен!");
}
```

### Очистить все данные:
```javascript
localStorage.removeItem('users');
localStorage.removeItem('currentUser');
localStorage.removeItem('isLoggedIn');
console.log("Все данные удалены!");
```

### Экспортировать данные:
```javascript
let users = JSON.parse(localStorage.getItem('users'));
let json = JSON.stringify(users, null, 2);
console.log(json);
// Скопируйте и сохраните в файл
```

### Импортировать данные:
```javascript
let usersData = [/* вставьте JSON */];
localStorage.setItem('users', JSON.stringify(usersData));
console.log("Данные импортированы!");
```

---

## 🔐 Для продакшена нужно:

### 1. **Backend сервер**
```
Node.js + Express
или
Python + Django/Flask
или
PHP + Laravel
```

### 2. **Настоящая база данных**
```
PostgreSQL
MySQL
MongoDB
```

### 3. **Хеширование паролей**
```javascript
// Пример с bcrypt (Node.js)
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);

// Проверка
const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
```

### 4. **JWT токены**
```javascript
// Вместо localStorage.isLoggedIn
const token = jwt.sign({ userId: user.id }, SECRET_KEY);
// Отправить клиенту
```

### 5. **HTTPS**
```
https://ваш-сайт.com
```

### 6. **Валидация на сервере**
```javascript
// Проверка email, логина, пароля на backend
if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
}
```

---

## 📋 FAQ

### Q: Можно ли восстановить пароль?
A: В текущей версии - нет. Данные только локально. Но вы можете изменить пароль в консоли (см. выше).

### Q: Можно ли войти с другого компьютера?
A: Нет, данные хранятся локально. Для этого нужен backend.

### Q: Безопасно ли хранить пароли так?
A: **НЕТ!** Это только для демо. Не используйте реальные пароли!

### Q: Что будет при очистке кэша?
A: Все данные пользователей удалятся безвозвратно.

### Q: Как сделать резервную копию?
A: Экспортируйте JSON из консоли и сохраните в файл (см. выше).

### Q: Можно ли синхронизировать между устройствами?
A: Не без backend сервера.

---

## 🎯 Текущая схема работы

```
┌─────────────────────────────────────────┐
│         Браузер пользователя            │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │         localStorage              │ │
│  │                                   │ │
│  │  users: [                         │ │
│  │    { username, password, ... }    │ │
│  │  ]                                │ │
│  │                                   │ │
│  │  currentUser: { ... }             │ │
│  │  isLoggedIn: "true"               │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │   PRIME360.AI сайт                │ │
│  │   (HTML + CSS + JS)               │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘

❌ Нет сервера
❌ Нет базы данных
❌ Нет синхронизации
```

---

## ✅ Выводы

**Для демо и тестирования:**
- ✅ Отлично работает
- ✅ Быстро и просто
- ✅ Не требует сервера
- ✅ Идеально для прототипа

**Для реального использования:**
- ❌ Нужен backend
- ❌ Нужна база данных
- ❌ Нужно шифрование
- ❌ Нужна безопасность

---

**Текущая реализация идеальна для демонстрации и обучения! 🎓**

Но для настоящего проекта обязательно добавьте backend! 🔐

