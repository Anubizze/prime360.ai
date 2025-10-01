// Проверка авторизации и загрузка профиля пользователя
function checkAuthAndLoadProfile() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') || sessionStorage.getItem('isLoggedIn');
    
    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // Загружаем данные пользователя
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser') || '{}');
    
    if (currentUser.firstName && currentUser.lastName) {
        // Обновляем имя пользователя
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            userNameElement.textContent = `${currentUser.firstName} ${currentUser.lastName}`;
        }
        
        // Обновляем роль
        const userRoleElement = document.getElementById('userRole');
        if (userRoleElement) {
            userRoleElement.textContent = currentUser.role || 'Пользователь';
        }
        
        // Обновляем аватар (первые буквы имени и фамилии)
        const userAvatarElement = document.getElementById('userAvatar');
        if (userAvatarElement) {
            const initials = currentUser.firstName.charAt(0) + currentUser.lastName.charAt(0);
            userAvatarElement.textContent = initials.toUpperCase();
        }
    }
}

// Функция выхода
function logout() {
    if (confirm('Вы действительно хотите выйти?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

// Получить текущего пользователя
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser') || '{}');
}

// Обновить данные пользователя
function updateCurrentUser(userData) {
    const isLocal = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLocal) {
        localStorage.setItem('currentUser', JSON.stringify(userData));
    } else {
        sessionStorage.setItem('currentUser', JSON.stringify(userData));
    }
    
    // Обновляем в списке пользователей
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === userData.id);
    
    if (userIndex !== -1) {
        users[userIndex] = userData;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Загрузка профиля при загрузке страницы
window.addEventListener('load', checkAuthAndLoadProfile);


