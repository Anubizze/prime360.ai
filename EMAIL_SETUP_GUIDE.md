# 📧 Настройка отправки писем через EmailJS

## 🚀 Быстрый старт

### 1️⃣ **Регистрация в EmailJS**
1. Зайдите на [emailjs.com](https://www.emailjs.com/)
2. Нажмите **"Sign Up"** и зарегистрируйтесь
3. Подтвердите email

### 2️⃣ **Подключение Email сервиса**
1. В панели управления нажмите **"Email Services"**
2. Выберите ваш email провайдер:
   - **Gmail** (рекомендуется)
   - **Outlook/Hotmail**
   - **Yahoo Mail**
   - **Другой SMTP**
3. Нажмите **"Add New Service"**
4. Следуйте инструкциям для подключения

### 3️⃣ **Создание Email шаблона**
1. Перейдите в **"Email Templates"**
2. Нажмите **"Create New Template"**
3. Используйте этот код:

```html
Subject: Восстановление пароля - PRIME360.AI

Здравствуйте, {{user_name}}!

Мы получили запрос на восстановление пароля для вашего аккаунта в системе PRIME360.AI.

Для создания нового пароля перейдите по ссылке:
{{reset_link}}

⚠️ Важно:
- Ссылка действительна в течение 24 часов
- Ссылка может быть использована только один раз
- Если вы не запрашивали восстановление пароля, проигнорируйте это письмо

С уважением,
Команда {{company_name}}

Поддержка: {{support_email}}
```

### 4️⃣ **Получение ключей**
После создания шаблона вы получите:
- **Service ID** (например: `service_abc123`)
- **Template ID** (например: `template_xyz789`)
- **Public Key** (например: `user_def456`)

### 5️⃣ **Обновление кода**
Откройте файл `js/email-service.js` и замените:

```javascript
// Замените на ваши данные из EmailJS
this.serviceId = 'YOUR_SERVICE_ID';        // ← Ваш Service ID
this.templateId = 'YOUR_TEMPLATE_ID';     // ← Ваш Template ID  
this.publicKey = 'YOUR_PUBLIC_KEY';       // ← Ваш Public Key
```

На ваши реальные данные:

```javascript
this.serviceId = 'service_abc123';
this.templateId = 'template_xyz789';
this.publicKey = 'user_def456';
```

---

## 🎯 **Альтернативные способы**

### 📧 **2. SendGrid (для продакшена)**
```javascript
// Установка: npm install @sendgrid/mail
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: email,
    from: 'noreply@prime360.ai',
    subject: 'Восстановление пароля',
    html: emailTemplate
};
```

### 📧 **3. Mailgun**
```javascript
// Установка: npm install mailgun-js
const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

const data = {
    from: 'noreply@prime360.ai',
    to: email,
    subject: 'Восстановление пароля',
    html: emailTemplate
};
```

### 📧 **4. AWS SES**
```javascript
// Установка: npm install aws-sdk
const AWS = require('aws-sdk');
const ses = new AWS.SES();

const params = {
    Destination: { ToAddresses: [email] },
    Message: {
        Body: { Html: { Data: emailTemplate } },
        Subject: { Data: 'Восстановление пароля' }
    },
    Source: 'noreply@prime360.ai'
};
```

---

## 🧪 **Тестирование**

### **1. Проверка настройки:**
1. Откройте `login.html`
2. Кликните "Забыли пароль?"
3. Введите ваш email
4. Проверьте консоль браузера (F12) на ошибки

### **2. Проверка письма:**
1. Проверьте папку "Входящие"
2. Если письма нет, проверьте "Спам"
3. Убедитесь, что ссылка работает

---

## 🔧 **Настройка шаблонов**

### **Шаблон восстановления пароля:**
```html
Subject: 🔐 Восстановление пароля - {{company_name}}

Здравствуйте, {{user_name}}!

Для восстановления пароля перейдите по ссылке:
{{reset_link}}

Ссылка действительна 24 часа.

С уважением,
{{company_name}}
```

### **Шаблон приветствия:**
```html
Subject: 🎉 Добро пожаловать в {{company_name}}!

Здравствуйте, {{user_name}}!

Ваш аккаунт успешно создан.

Войти в систему: {{login_url}}

С уважением,
{{company_name}}
```

---

## 🛡️ **Безопасность**

### **Ограничения EmailJS:**
- ✅ **200 писем/месяц** бесплатно
- ✅ **Безопасная отправка** через их серверы
- ✅ **Защита от спама** встроена

### **Рекомендации:**
- 🔒 **Не храните ключи** в публичном коде
- 📧 **Используйте доменную почту** (не Gmail для бизнеса)
- 🛡️ **Настройте DKIM** для лучшей доставляемости

---

## 🎉 **Готово!**

После настройки EmailJS ваша система будет отправлять реальные письма на почту пользователей!

**Лимиты EmailJS (бесплатно):**
- 📧 200 писем в месяц
- 👥 До 2 email сервисов
- 📝 До 2 шаблонов
- 🔑 1 публичный ключ

Для больших объемов рассмотрите платные планы или другие сервисы.
