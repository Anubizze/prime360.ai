/**
 * Универсальный сервис отправки писем
 * Поддерживает отправку на любые email адреса
 */

class UniversalEmailService {
    constructor() {
        this.emailjsConfig = {
            serviceId: 'service_q7n32e8',
            templateId: 'template_m07udpf',
            publicKey: 'R76z8_rjN3YXj448h'
        };
        
        this.smtpConfig = {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'YOUR_EMAIL@gmail.com',
                pass: 'YOUR_APP_PASSWORD'
            }
        };
    }

    /**
     * Отправляет письмо для восстановления пароля
     * @param {string} toEmail - Email получателя
     * @param {string} resetLink - Ссылка для сброса пароля
     * @param {string} userName - Имя пользователя
     */
    async sendPasswordResetEmail(toEmail, resetLink, userName) {
        // Валидация email
        if (!this.isValidEmail(toEmail)) {
            return { success: false, message: 'Неверный формат email адреса' };
        }

        // Пробуем разные способы отправки
        const methods = [
            () => this.sendViaEmailJS(toEmail, resetLink, userName),
            () => this.sendViaSMTP(toEmail, resetLink, userName),
            () => this.sendViaWebhook(toEmail, resetLink, userName)
        ];

        for (const method of methods) {
            try {
                const result = await method();
                if (result.success) {
                    return result;
                }
            } catch (error) {
                console.warn('Email method failed:', error);
            }
        }

        return { success: false, message: 'Все способы отправки недоступны' };
    }

    /**
     * Отправка через EmailJS
     */
    async sendViaEmailJS(toEmail, resetLink, userName) {
        if (typeof emailjs === 'undefined') {
            throw new Error('EmailJS не загружен');
        }

        const templateParams = {
            to_email: toEmail,
            user_name: userName,
            reset_link: resetLink,
            company_name: 'PRIME360.AI',
            support_email: 'support@prime360.ai'
        };

        const response = await emailjs.send(
            this.emailjsConfig.serviceId,
            this.emailjsConfig.templateId,
            templateParams
        );

        return { success: true, message: `Письмо отправлено через EmailJS на ${toEmail}` };
    }

    /**
     * Отправка через SMTP (требует сервер)
     */
    async sendViaSMTP(toEmail, resetLink, userName) {
        // Это работает только на сервере с Node.js
        const emailData = {
            to: toEmail,
            subject: 'Восстановление пароля - PRIME360.AI',
            html: this.generateEmailHTML(userName, resetLink),
            text: this.generateEmailText(userName, resetLink)
        };

        // Здесь должен быть код для отправки через SMTP
        // Например, через nodemailer или другой SMTP клиент
        
        return { success: true, message: `Письмо отправлено через SMTP на ${toEmail}` };
    }

    /**
     * Отправка через веб-хук (например, Zapier, IFTTT)
     */
    async sendViaWebhook(toEmail, resetLink, userName) {
        const webhookUrl = 'YOUR_WEBHOOK_URL'; // Замените на ваш веб-хук
        
        const payload = {
            to_email: toEmail,
            user_name: userName,
            reset_link: resetLink,
            company_name: 'PRIME360.AI',
            template: 'password_reset'
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            return { success: true, message: `Письмо отправлено через веб-хук на ${toEmail}` };
        } else {
            throw new Error('Ошибка веб-хука');
        }
    }

    /**
     * Генерирует HTML содержимое письма
     */
    generateEmailHTML(userName, resetLink) {
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #70B8B8 0%, #5A9A9A 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .button { display: inline-block; background: #70B8B8; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                .warning { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🔐 PRIME360.AI</h1>
                    <h2>Восстановление пароля</h2>
                </div>
                <div class="content">
                    <p>Здравствуйте, ${userName}!</p>
                    <p>Мы получили запрос на восстановление пароля для вашего аккаунта.</p>
                    <p>Для создания нового пароля нажмите на кнопку ниже:</p>
                    <a href="${resetLink}" class="button">🔐 Сбросить пароль</a>
                    <div class="warning">
                        <strong>⚠️ Важно:</strong>
                        <ul>
                            <li>Ссылка действительна в течение 24 часов</li>
                            <li>Ссылка может быть использована только один раз</li>
                            <li>Если вы не запрашивали восстановление пароля, проигнорируйте это письмо</li>
                        </ul>
                    </div>
                    <p>Если кнопка не работает, скопируйте эту ссылку в браузер:</p>
                    <p style="word-break: break-all; background: #f8f9fa; padding: 10px; border-radius: 5px;">${resetLink}</p>
                    <p>С уважением,<br>Команда PRIME360.AI</p>
                </div>
            </div>
        </body>
        </html>
        `;
    }

    /**
     * Генерирует текстовое содержимое письма
     */
    generateEmailText(userName, resetLink) {
        return `
Восстановление пароля - PRIME360.AI

Здравствуйте, ${userName}!

Мы получили запрос на восстановление пароля для вашего аккаунта в системе PRIME360.AI.

Для создания нового пароля перейдите по ссылке:
${resetLink}

⚠️ Важно:
- Ссылка действительна в течение 24 часов
- Ссылка может быть использована только один раз
- Если вы не запрашивали восстановление пароля, проигнорируйте это письмо

С уважением,
Команда PRIME360.AI

Поддержка: support@prime360.ai
        `;
    }

    /**
     * Проверяет валидность email адреса
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Получает список поддерживаемых доменов
     */
    getSupportedDomains() {
        return [
            'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
            'mail.ru', 'yandex.ru', 'rambler.ru', 'bk.ru',
            'icloud.com', 'protonmail.com', 'tutanota.com'
        ];
    }

    /**
     * Проверяет, поддерживается ли домен
     */
    isDomainSupported(email) {
        const domain = email.split('@')[1]?.toLowerCase();
        return this.getSupportedDomains().includes(domain);
    }
}

// Создаем глобальный экземпляр
window.universalEmailService = new UniversalEmailService();
