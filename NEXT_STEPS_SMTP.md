# 🚀 Следующие шаги после настройки SMTP

## ✅ **Что уже сделано:**
- ✅ SMTP сервер настроен в EmailJS
- ✅ Service ID: `service_q7n32e8`
- ✅ Host: `smtp.gmail.com`
- ✅ Port: `587`
- ✅ User: `haval.semey@mail.ru`

## 🔧 **Что нужно сделать дальше:**

### **1️⃣ Создать Email шаблон**

1. В панели EmailJS перейдите в **"Email Templates"**
2. Нажмите **"Create New Template"**
3. Используйте этот код:

```html
Subject: 🔐 Восстановление пароля - PRIME360.AI

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

4. Сохраните шаблон и **скопируйте Template ID**

### **2️⃣ Получить Public Key**

1. В панели EmailJS перейдите в **"Account"**
2. Найдите раздел **"API Keys"**
3. **Скопируйте Public Key**

### **3️⃣ Обновить код**

Замените в файлах:

#### **В `js/email-service.js`:**
```javascript
this.templateId = 'YOUR_TEMPLATE_ID'; // ← Замените на ваш Template ID
this.publicKey = 'YOUR_PUBLIC_KEY';   // ← Замените на ваш Public Key
```

#### **В `js/universal-email-service.js`:**
```javascript
templateId: 'YOUR_TEMPLATE_ID', // ← Замените на ваш Template ID
publicKey: 'YOUR_PUBLIC_KEY'    // ← Замените на ваш Public Key
```

---

## 🧪 **Тестирование:**

### **1. Проверьте настройки:**
- ✅ SMTP сервер создан
- ✅ Email шаблон создан
- ✅ Public Key получен
- ✅ Код обновлен

### **2. Протестируйте отправку:**
1. Откройте `login.html`
2. Кликните **"Забыли пароль?"**
3. Введите `haval.semey@mail.ru` (ваш email)
4. Нажмите **"Отправить ссылку"**
5. **Проверьте почту** - письмо должно прийти!

### **3. Протестируйте на других адресах:**
- `test@gmail.com`
- `user@yahoo.com`
- `person@hotmail.com`

---

## 🔍 **Возможные проблемы:**

### **"Template not found":**
- ✅ Проверьте Template ID
- ✅ Убедитесь, что шаблон опубликован

### **"Service not found":**
- ✅ Проверьте Service ID: `service_q7n32e8`
- ✅ Убедитесь, что сервис активен

### **"Authentication failed":**
- ✅ Проверьте App Password для `haval.semey@mail.ru`
- ✅ Убедитесь, что двухфакторная аутентификация настроена

### **"Email not sent":**
- ✅ Проверьте настройки SMTP
- ✅ Убедитесь, что порт 587 открыт

---

## 📧 **Настройки для Mail.ru:**

### **Если используете Mail.ru:**
- Host: `smtp.mail.ru`
- Port: `587` или `465`
- SSL: `true` (для порта 465)

### **App Password для Mail.ru:**
1. Войдите в настройки Mail.ru
2. Безопасность → Пароли приложений
3. Создайте пароль для "Почта"

---

## 🎯 **Готовый пример кода:**

После получения всех данных, ваш код должен выглядеть так:

```javascript
// js/email-service.js
this.serviceId = 'service_q7n32e8';
this.templateId = 'template_abc123'; // Ваш Template ID
this.publicKey = 'user_xyz789';       // Ваш Public Key
```

---

## 🎉 **После настройки:**

Ваша система будет отправлять письма:
- 📧 **На любые email адреса**
- 📧 **Через ваш SMTP сервер**
- 📧 **С красивым дизайном**
- 📧 **С безопасными токенами**

**Готово к использованию!** 🚀
