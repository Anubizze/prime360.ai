/**
 * EmailJS сервис для отправки писем
 * Простая интеграция без сервера
 */

class EmailService {
    constructor() {
        // Временное решение - используем встроенный EmailJS сервис
        this.serviceId = 'service_q7n32e8'; // Оставим тот же, но изменим настройки
        this.templateId = 'template_m07udpf';
        this.publicKey = 'R76z8_rjN3YXj448h';
        
        // Инициализация EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.init(this.publicKey);
        }
    }

    /**
     * Отправляет письмо для восстановления пароля
     * @param {string} toEmail - Email получателя
     * @param {string} resetLink - Ссылка для сброса пароля
     * @param {string} userName - Имя пользователя
     */
    async sendPasswordResetEmail(toEmail, resetLink, userName) {
        try {
            // Валидация email
            if (!this.isValidEmail(toEmail)) {
                return { success: false, message: 'Неверный формат email адреса' };
            }

            const templateParams = {
                to_email: toEmail,
                user_name: userName,
                reset_link: resetLink,
                company_name: 'PRIME360.AI',
                support_email: 'support@prime360.ai'
            };

            console.log('Sending email with params:', {
                serviceId: this.serviceId,
                templateId: this.templateId,
                templateParams: templateParams
            });

            const response = await emailjs.send(
                this.serviceId,
                this.templateId,
                templateParams
            );

            console.log('Email sent successfully to:', toEmail, response);
            return { success: true, message: `Письмо отправлено на ${toEmail}` };
            
        } catch (error) {
            console.error('Email sending failed:', error);
            return { success: false, message: 'Ошибка отправки письма: ' + error.text };
        }
    }

    /**
     * Проверяет валидность email адреса
     * @param {string} email - Email для проверки
     * @returns {boolean} - Результат проверки
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Отправляет приветственное письмо новому пользователю
     * @param {string} toEmail - Email получателя
     * @param {string} userName - Имя пользователя
     * @param {string} loginUrl - Ссылка для входа
     */
    async sendWelcomeEmail(toEmail, userName, loginUrl) {
        try {
            const templateParams = {
                to_email: toEmail,
                user_name: userName,
                login_url: loginUrl,
                company_name: 'PRIME360.AI'
            };

            const response = await emailjs.send(
                this.serviceId,
                'welcome_template', // ID шаблона приветствия
                templateParams
            );

            return { success: true, message: 'Приветственное письмо отправлено' };
            
        } catch (error) {
            console.error('Welcome email failed:', error);
            return { success: false, message: 'Ошибка отправки приветственного письма' };
        }
    }

    /**
     * Отправляет уведомление об изменении пароля
     * @param {string} toEmail - Email получателя
     * @param {string} userName - Имя пользователя
     * @param {string} changeTime - Время изменения
     */
    async sendPasswordChangeNotification(toEmail, userName, changeTime) {
        try {
            const templateParams = {
                to_email: toEmail,
                user_name: userName,
                change_time: changeTime,
                company_name: 'PRIME360.AI'
            };

            const response = await emailjs.send(
                this.serviceId,
                'password_change_template', // ID шаблона уведомления
                templateParams
            );

            return { success: true, message: 'Уведомление отправлено' };
            
        } catch (error) {
            console.error('Password change notification failed:', error);
            return { success: false, message: 'Ошибка отправки уведомления' };
        }
    }
}

// Создаем глобальный экземпляр
window.emailService = new EmailService();
