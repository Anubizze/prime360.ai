// Library Manager - Управление библиотекой документов

// Структура документов в библиотеке
const libraryData = {
    normative: {
        title: "Нормативные документы РК",
        icon: "📋",
        folders: [
            {
                name: "КВЭ",
                icon: "📁",
                files: [
                    {
                        name: "Правила по КВЭ с изм. на 26.02.2023 год.pdf",
                        path: "documents/Нормативные документы/КВЭ/Правила по КВЭ с изм. на 26.02.2023 год.pdf",
                        type: "PDF",
                        size: "2.1 MB",
                        date: "26.02.2023"
                    }
                ]
            },
            {
                name: "Строительство",
                icon: "📁",
                files: [
                    {
                        name: "ЗРК Об архитектурной, градостроительной и строительной деятельности. Изм на 07.03.2023.pdf",
                        path: "documents/Нормативные документы/Строительство/ЗРК Об архитектурной, градостроительной и строительной деятельности. Изм на 07.03.2023.pdf",
                        type: "PDF",
                        size: "3.5 MB",
                        date: "07.03.2023"
                    },
                    {
                        name: "НДЦС РК 8.01-08-2022. Порядок определения.pdf",
                        path: "documents/Нормативные документы/Строительство/НДЦС РК 8.01-08-2022. Порядок определения.pdf",
                        type: "PDF",
                        size: "1.8 MB",
                        date: "08.01.2022"
                    },
                    {
                        name: "Приказ 165. Правила опред.тех.слож. Изм.на 14.02.2023.pdf",
                        path: "documents/Нормативные документы/Строительство/Приказ 165. Правила опред.тех.слож. Изм.на 14.02.2023.pdf",
                        type: "PDF",
                        size: "2.3 MB",
                        date: "14.02.2023"
                    },
                    {
                        name: "СН РК 1.02-03-2022. 12.01.2023.pdf",
                        path: "documents/Нормативные документы/Строительство/СН РК 1.02-03-2022. 12.01.2023.pdf",
                        type: "PDF",
                        size: "4.2 MB",
                        date: "12.01.2023"
                    }
                ]
            },
            {
                name: "Экология",
                icon: "📁",
                files: [
                    {
                        name: "Инструкция по организации и проведению экологической оценке.pdf",
                        path: "documents/Нормативные документы/Экология/Инструкция по организации и проведению экологической оценке.pdf",
                        type: "PDF",
                        size: "1.5 MB",
                        date: "05.09.2023"
                    },
                    {
                        name: "О распределении полномочий.pdf",
                        path: "documents/Нормативные документы/Экология/О распределении полномочий.pdf",
                        type: "PDF",
                        size: "0.9 MB",
                        date: "02.01.2021"
                    },
                    {
                        name: "ЭК РК на 05.09.2023г.pdf",
                        path: "documents/Нормативные документы/Экология/ЭК РК на 05.09.2023г.pdf",
                        type: "PDF",
                        size: "3.1 MB",
                        date: "05.09.2023"
                    },
                    {
                        name: "ЭК РК от 02.01.2021 № 400-VI с изм 07.03.2023.pdf",
                        path: "documents/Нормативные документы/Экология/ЭК РК от 02.01.2021 № 400-VI  с изм 07.03.2023.pdf",
                        type: "PDF",
                        size: "2.7 MB",
                        date: "07.03.2023"
                    }
                ]
            }
        ]
    },
    standards: {
        title: "Стандарты, регламенты, инструкции",
        icon: "📄",
        folders: []
    },
    items: {
        title: "Управление проектами",
        icon: "📦",
        folders: [
            {
                name: "Руководства и учебники",
                icon: "📁",
                files: [
                    {
                        name: "PMI Руководство к Своду знаний по управлению проектами (Руководство PMBOK 6) 2017.pdf",
                        path: "documents/Управление проектами/PMI Руководство к Своду знаний по управлению проектами (Руководство PMBOK 6) 2017.pdf",
                        type: "PDF",
                        size: "15.2 MB",
                        date: "2017"
                    },
                    {
                        name: "Зубрицкий А.А. Управление проектами с использованием Microsoft Project 2016.pdf",
                        path: "documents/Управление проектами/Зубрицкий А.А. 2016 Управление проектами с использованием Microsoft Project 2016.pdf",
                        type: "PDF",
                        size: "8.5 MB",
                        date: "2016"
                    },
                    {
                        name: "Project Management Processes.pdf",
                        path: "documents/Управление проектами/13 Группы процессов управления проектом и их взаимодействие/Project management processes.pdf",
                        type: "PDF",
                        size: "2.1 MB",
                        date: "2024"
                    }
                ]
            },
            {
                name: "Учебные материалы",
                icon: "📁",
                files: [
                    {
                        name: "1. Введение в управление проектами",
                        path: "documents/Управление проектами/1 Введение в управление проектами.zip",
                        type: "ZIP",
                        size: "~50 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "134 файла"
                    },
                    {
                        name: "2. Роль Руководителя проектов",
                        path: "documents/Управление проектами/2 Роль Руководителя проектов.zip",
                        type: "ZIP",
                        size: "~8 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "21 файл"
                    },
                    {
                        name: "3. Управление интеграцией проекта",
                        path: "documents/Управление проектами/3 Управление интеграцией проекта.zip",
                        type: "ZIP",
                        size: "~40 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "102 файла"
                    },
                    {
                        name: "4. Управление заинтересованными сторонами",
                        path: "documents/Управление проектами/4 Управление заинтересованными сторонами.zip",
                        type: "ZIP",
                        size: "~15 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "38 файлов"
                    },
                    {
                        name: "5. Управление содержанием проектов",
                        path: "documents/Управление проектами/5 Управление содержанием проектов.zip",
                        type: "ZIP",
                        size: "~16 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "41 файл"
                    },
                    {
                        name: "6. Управление расписанием",
                        path: "documents/Управление проектами/6 Управление расписанием.zip",
                        type: "ZIP",
                        size: "~28 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "73 файла"
                    },
                    {
                        name: "7. Управление стоимостью проекта",
                        path: "documents/Управление проектами/7 Управление стоимостью проекта.zip",
                        type: "ZIP",
                        size: "~18 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "47 файлов"
                    },
                    {
                        name: "8. Управление качеством проекта",
                        path: "documents/Управление проектами/8 Управление качеством проекта.zip",
                        type: "ZIP",
                        size: "~13 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "34 файла"
                    },
                    {
                        name: "9. Управление ресурсами",
                        path: "documents/Управление проектами/9 Управление ресурсами.zip",
                        type: "ZIP",
                        size: "~20 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "53 файла"
                    },
                    {
                        name: "10. Управление коммуникациями проекта",
                        path: "documents/Управление проектами/10 Управление коммуникациями проекта.zip",
                        type: "ZIP",
                        size: "~12 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "32 файла"
                    },
                    {
                        name: "11. Управление рисками проекта",
                        path: "documents/Управление проектами/11 Управление рисками проекта.zip",
                        type: "ZIP",
                        size: "~25 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "66 файлов"
                    },
                    {
                        name: "12. Управление закупками проекта",
                        path: "documents/Управление проектами/12 Управление закупками проекта.zip",
                        type: "ZIP",
                        size: "~7 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "19 файлов"
                    },
                    {
                        name: "13. Группы процессов управления проектом",
                        path: "documents/Управление проектами/13 Группы процессов управления проектом и их взаимодействие.zip",
                        type: "ZIP",
                        size: "~8 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "20 файлов"
                    },
                    {
                        name: "Термины и определения",
                        path: "documents/Управление проектами/термины.zip",
                        type: "ZIP",
                        size: "~22 MB",
                        date: "2024",
                        isFolder: true,
                        filesCount: "57 файлов"
                    }
                ]
            }
        ]
    }
};

// Функция для получения иконки файла по типу
function getFileIcon(type) {
    const icons = {
        'PDF': '📄',
        'DOC': '📝',
        'DOCX': '📝',
        'XLSX': '📊',
        'XLS': '📊',
        'DWG': '📐',
        'JPG': '🖼️',
        'PNG': '🖼️',
        'ПАПКА': '📁',
        'ИНФО': 'ℹ️',
        'ZIP': '📦'
    };
    return icons[type.toUpperCase()] || '📄';
}

// Функция для получения цвета иконки по типу папки
function getFolderIconColor(categoryType) {
    const colors = {
        'normative': '',
        'standards': 'purple',
        'items': 'orange'
    };
    return colors[categoryType] || '';
}

// Функция для загрузки документов в модальное окно
function loadDocuments(categoryType, modalId) {
    const category = libraryData[categoryType];
    if (!category) return;

    const modalBody = document.querySelector(`#${modalId} .documents-list`);
    if (!modalBody) return;

    let html = '';
    
    // Проверяем, есть ли документы
    if (!category.folders || category.folders.length === 0) {
        html = `
            <div class="empty-state">
                <div class="empty-icon">📂</div>
                <div class="empty-title">Раздел в разработке</div>
                <div class="empty-description">Новые документы будут добавлены в ближайшее время</div>
            </div>
        `;
        modalBody.innerHTML = html;
        return;
    }
    
    // Создаем группы по папкам
    category.folders.forEach(folder => {
        // Заголовок папки
        html += `
            <div class="folder-section">
                <div class="folder-header">
                    <span class="folder-icon">${folder.icon}</span>
                    <span class="folder-name">${folder.name}</span>
                    <span class="folder-count">${folder.files.length} файл(ов)</span>
                </div>
                <div class="folder-files">
        `;
        
        // Файлы в папке
        folder.files.forEach(file => {
            const iconColor = getFolderIconColor(categoryType);
            const isInfo = file.type.toLowerCase() === 'инфо';
            const isFolder = file.type.toLowerCase() === 'папка';
            
            // Для информационных элементов не показываем кнопки
            if (isInfo) {
                html += `
                    <div class="document-item info-item">
                        <div class="document-icon-small ${iconColor}">${getFileIcon(file.type)}</div>
                        <div class="document-details">
                            <div class="document-name">${file.name}</div>
                            <div class="document-meta">Доступно в папке: documents/Управление проектами/</div>
                        </div>
                    </div>
                `;
            } else if (isFolder && file.isFolder) {
                // Для архивов с учебными материалами
                const zipFileName = file.path.split('/').pop(); // Получаем имя файла из пути
                html += `
                    <div class="document-item">
                        <div class="document-icon-small ${iconColor}">${getFileIcon(file.type)}</div>
                        <div class="document-details">
                            <div class="document-name">${file.name}</div>
                            <div class="document-meta">${file.type} • ${file.size} • ${file.filesCount || ''}</div>
                        </div>
                        <div class="document-actions">
                            <button class="download-btn folder-btn" onclick="downloadDocument('${file.path}', '${zipFileName}')" title="Скачать архив">
                                Скачать
                            </button>
                        </div>
                    </div>
                `;
            } else {
                const buttonText = isFolder ? 'Открыть папку' : 'Скачать';
                html += `
                    <div class="document-item">
                        <div class="document-icon-small ${iconColor}">${getFileIcon(file.type)}</div>
                        <div class="document-details">
                            <div class="document-name">${file.name}</div>
                            <div class="document-meta">${file.type} • ${file.size} • ${file.date}</div>
                        </div>
                        <div class="document-actions">
                            <button class="view-btn" onclick="viewDocument('${file.path}', '${file.name}')" title="Просмотр">
                                👁️
                            </button>
                            <button class="download-btn" onclick="downloadDocument('${file.path}', '${file.name}')" title="${buttonText}">
                                ${buttonText}
                            </button>
                        </div>
                    </div>
                `;
            }
        });
        
        html += `
                </div>
            </div>
        `;
    });

    modalBody.innerHTML = html;
}

// Функция для просмотра документа
function viewDocument(path, name) {
    // Проверяем, является ли это папкой
    if (path.endsWith('/')) {
        // Для папок показываем уведомление
        alert('Откройте папку в файловом менеджере:\n' + path);
        return;
    }
    
    // Кодируем путь для корректной работы с кириллицей и пробелами
    const encodedPath = path.split('/').map(part => encodeURIComponent(part)).join('/');
    
    // Открываем документ в новой вкладке
    // Браузер сам решит: PDF откроется для просмотра, DOC/DOCX откроются в установленном приложении или будут скачаны
    window.open(encodedPath, '_blank');
}

// Функция для скачивания документа
function downloadDocument(path, name) {
    // Проверяем, является ли это папкой
    if (path.endsWith('/')) {
        // Для папок показываем путь
        alert('Папка находится здесь:\n' + path);
        return;
    }
    
    // Кодируем путь для корректной работы с кириллицей и пробелами
    const encodedPath = path.split('/').map(part => encodeURIComponent(part)).join('/');
    
    // Создаем временную ссылку и инициируем скачивание
    const link = document.createElement('a');
    link.href = encodedPath;
    link.download = name || path.split('/').pop();
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    
    // Небольшая задержка перед удалением ссылки
    setTimeout(() => {
        document.body.removeChild(link);
    }, 100);
}

// Функция для подсчета общего количества документов
function getTotalDocumentsCount(categoryType) {
    const category = libraryData[categoryType];
    if (!category) return 0;
    
    let total = 0;
    category.folders.forEach(folder => {
        total += folder.files.length;
    });
    return total;
}

// Функция поиска документов
function setupSearch(modalId, categoryType) {
    const searchInput = document.querySelector(`#${modalId} .modal-search-input`);
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const category = libraryData[categoryType];
        if (!category) return;

        const modalBody = document.querySelector(`#${modalId} .documents-list`);
        let html = '';

        category.folders.forEach(folder => {
            const filteredFiles = folder.files.filter(file => 
                file.name.toLowerCase().includes(searchTerm)
            );

            if (filteredFiles.length > 0) {
                const iconColor = getFolderIconColor(categoryType);
                html += `
                    <div class="folder-section">
                        <div class="folder-header">
                            <span class="folder-icon">${folder.icon}</span>
                            <span class="folder-name">${folder.name}</span>
                            <span class="folder-count">${filteredFiles.length} файл(ов)</span>
                        </div>
                        <div class="folder-files">
                `;

                filteredFiles.forEach(file => {
                    const isInfo = file.type.toLowerCase() === 'инфо';
                    const isFolder = file.type.toLowerCase() === 'папка';
                    
                    if (isInfo) {
                        html += `
                            <div class="document-item info-item">
                                <div class="document-icon-small ${iconColor}">${getFileIcon(file.type)}</div>
                                <div class="document-details">
                                    <div class="document-name">${file.name}</div>
                                    <div class="document-meta">Доступно в папке: documents/Управление проектами/</div>
                                </div>
                            </div>
                        `;
                    } else if (isFolder && file.isFolder) {
                        // Для архивов с учебными материалами
                        const zipFileName = file.path.split('/').pop(); // Получаем имя файла из пути
                        html += `
                            <div class="document-item">
                                <div class="document-icon-small ${iconColor}">${getFileIcon(file.type)}</div>
                                <div class="document-details">
                                    <div class="document-name">${file.name}</div>
                                    <div class="document-meta">${file.type} • ${file.size} • ${file.filesCount || ''}</div>
                                </div>
                                <div class="document-actions">
                                    <button class="download-btn folder-btn" onclick="downloadDocument('${file.path}', '${zipFileName}')" title="Скачать архив">
                                        Скачать
                                    </button>
                                </div>
                            </div>
                        `;
                    } else {
                        const buttonText = isFolder ? 'Открыть папку' : 'Скачать';
                        html += `
                            <div class="document-item">
                                <div class="document-icon-small ${iconColor}">${getFileIcon(file.type)}</div>
                                <div class="document-details">
                                    <div class="document-name">${file.name}</div>
                                    <div class="document-meta">${file.type} • ${file.size} • ${file.date}</div>
                                </div>
                                <div class="document-actions">
                                    <button class="view-btn" onclick="viewDocument('${file.path}', '${file.name}')" title="Просмотр">
                                        👁️
                                    </button>
                                    <button class="download-btn" onclick="downloadDocument('${file.path}', '${file.name}')" title="${buttonText}">
                                        ${buttonText}
                                    </button>
                                </div>
                            </div>
                        `;
                    }
                });

                html += `
                        </div>
                    </div>
                `;
            }
        });

        if (html === '') {
            html = '<div class="no-results">Документы не найдены</div>';
        }

        modalBody.innerHTML = html;
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обновляем счетчики на карточках
    const normativeCard = document.querySelector('#card-normative .card-badge');
    if (normativeCard) {
        const count = getTotalDocumentsCount('normative');
        normativeCard.textContent = count > 0 ? `${count} документов` : 'Скоро';
    }

    const standardsCard = document.querySelector('#card-standards .card-badge');
    if (standardsCard) {
        const count = getTotalDocumentsCount('standards');
        standardsCard.textContent = count > 0 ? `${count} документов` : 'Скоро';
    }

    const itemsCard = document.querySelector('#card-items .card-badge');
    if (itemsCard) {
        const count = getTotalDocumentsCount('items');
        itemsCard.textContent = count > 0 ? `${count} документов` : 'Скоро';
    }
});

// Функция открытия модального окна с загрузкой данных
function openModalWithData(modalId, categoryType) {
    loadDocuments(categoryType, modalId);
    setupSearch(modalId, categoryType);
    
    document.getElementById(modalId).style.display = 'flex';
    setTimeout(() => {
        document.querySelector(`#${modalId} .modal-content`).classList.add('show');
    }, 10);
}

// Функция показа информации об архиве
function showArchiveInfo(archiveName, filesCount) {
    alert('📦 Информация об архиве\n\n' + 
          '📁 ' + archiveName + '\n\n' + 
          '📊 Содержимое: ' + filesCount + ' учебных материалов (PNG)\n\n' + 
          '💡 Как использовать:\n' +
          '1. Нажмите кнопку "Скачать ZIP"\n' +
          '2. Сохраните архив на компьютере\n' +
          '3. Распакуйте ZIP-архив\n' +
          '4. Просматривайте материалы в любом порядке\n\n' +
          '✅ Все учебные материалы будут доступны после распаковки!');
}

