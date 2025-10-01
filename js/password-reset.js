/**
 * Система восстановления пароля PRIME360.AI
 * Управление токенами и валидация
 */

class PasswordResetManager {
    constructor() {
        this.tokenExpiryHours = 24; // Срок действия токена в часах
        this.storageKey = 'resetTokens';
    }

    /**
     * Генерирует новый токен восстановления пароля
     * @param {string} email - Email пользователя
     * @returns {string} - Сгенерированный токен
     */
    generateResetToken(email) {
        const token = 'reset_' + Math.random().toString(36).substr(2, 32) + '_' + Date.now();
        const tokenData = {
            token: token,
            email: email,
            createdAt: new Date().toISOString(),
            used: false,
            attempts: 0 // Счетчик попыток использования
        };
        
        // Сохраняем токен в localStorage
        let resetTokens = this.getTokens();
        
        // Удаляем старые токены для этого email
        resetTokens = resetTokens.filter(t => t.email !== email);
        
        // Добавляем новый токен
        resetTokens.push(tokenData);
        this.saveTokens(resetTokens);
        
        return token;
    }

    /**
     * Проверяет валидность токена
     * @param {string} token - Токен для проверки
     * @returns {object|null} - Данные токена или null если недействителен
     */
    validateToken(token) {
        const resetTokens = this.getTokens();
        const tokenData = resetTokens.find(t => t.token === token);
        
        if (!tokenData) {
            return null;
        }
        
        // Проверяем срок действия токена
        const now = new Date();
        const tokenDate = new Date(tokenData.createdAt);
        const hoursDiff = (now - tokenDate) / (1000 * 60 * 60);
        
        if (hoursDiff > this.tokenExpiryHours) {
            // Удаляем истекший токен
            this.removeToken(token);
            return null;
        }
        
        // Проверяем, не использован ли токен
        if (tokenData.used) {
            return null;
        }
        
        // Проверяем количество попыток (максимум 5)
        if (tokenData.attempts >= 5) {
            this.removeToken(token);
            return null;
        }
        
        return tokenData;
    }

    /**
     * Отмечает токен как использованный
     * @param {string} token - Токен для отметки
     */
    markTokenAsUsed(token) {
        const resetTokens = this.getTokens();
        const tokenIndex = resetTokens.findIndex(t => t.token === token);
        
        if (tokenIndex !== -1) {
            resetTokens[tokenIndex].used = true;
            this.saveTokens(resetTokens);
        }
    }

    /**
     * Увеличивает счетчик попыток использования токена
     * @param {string} token - Токен для обновления
     */
    incrementTokenAttempts(token) {
        const resetTokens = this.getTokens();
        const tokenIndex = resetTokens.findIndex(t => t.token === token);
        
        if (tokenIndex !== -1) {
            resetTokens[tokenIndex].attempts++;
            this.saveTokens(resetTokens);
        }
    }

    /**
     * Удаляет токен
     * @param {string} token - Токен для удаления
     */
    removeToken(token) {
        const resetTokens = this.getTokens();
        const updatedTokens = resetTokens.filter(t => t.token !== token);
        this.saveTokens(updatedTokens);
    }

    /**
     * Очищает истекшие токены
     */
    cleanupExpiredTokens() {
        const resetTokens = this.getTokens();
        const now = new Date();
        
        const validTokens = resetTokens.filter(tokenData => {
            const tokenDate = new Date(tokenData.createdAt);
            const hoursDiff = (now - tokenDate) / (1000 * 60 * 60);
            return hoursDiff <= this.tokenExpiryHours;
        });
        
        this.saveTokens(validTokens);
    }

    /**
     * Получает все токены из localStorage
     * @returns {Array} - Массив токенов
     */
    getTokens() {
        return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    }

    /**
     * Сохраняет токены в localStorage
     * @param {Array} tokens - Массив токенов для сохранения
     */
    saveTokens(tokens) {
        localStorage.setItem(this.storageKey, JSON.stringify(tokens));
    }

    /**
     * Создает ссылку для сброса пароля
     * @param {string} token - Токен восстановления
     * @returns {string} - Полная ссылка
     */
    createResetLink(token) {
        // Проверяем, работаем ли мы с локальными файлами
        if (window.location.protocol === 'file:') {
            // Для локальных файлов используем текущий путь
            const currentPath = window.location.pathname;
            const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
            return `file://${basePath}/reset-password.html?token=${token}`;
        } else {
            // Для веб-сервера используем origin
            return `${window.location.origin}/reset-password.html?token=${token}`;
        }
    }

    /**
     * Обновляет пароль пользователя
     * @param {string} email - Email пользователя
     * @param {string} newPassword - Новый пароль
     * @returns {boolean} - Успех операции
     */
    updateUserPassword(email, newPassword) {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(u => u.email === email);
        
        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            users[userIndex].passwordUpdatedAt = new Date().toISOString();
            localStorage.setItem('users', JSON.stringify(users));
            return true;
        }
        
        return false;
    }

    /**
     * Отправляет уведомление об успешном сбросе пароля
     * @param {string} email - Email пользователя
     */
    sendPasswordResetNotification(email) {
        // В реальном приложении здесь будет отправка email
        console.log(`Password reset notification sent to ${email}`);
        
        // Сохраняем уведомление в localStorage для демо
        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        notifications.push({
            id: Date.now(),
            type: 'password_reset',
            email: email,
            message: 'Пароль был успешно изменен',
            createdAt: new Date().toISOString(),
            read: false
        });
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }
}

// Создаем глобальный экземпляр
window.passwordResetManager = new PasswordResetManager();

// Очищаем истекшие токены при загрузке
window.addEventListener('load', function() {
    window.passwordResetManager.cleanupExpiredTokens();
});
