// Инициализация данных
const productsData = {
    'black-granite': [
        {
            name: "Комплект гранитный",
            options: [
                ["1", "0,70×0,90×0,065", "0,80×0,20×0,15", "0,06495", "49 100"],
                ["2", "0,80×0,40×0,05", "0,55×0,15×0,12", "0,0117", "20 200"],
                ["3", "0,80×0,45×0,05", "0,55×0,15×0,12", "0,0279", "21 650"],
                ["4", "0,90×0,45×0,05", "0,55×0,15×0,12", "0,03015", "23 300"],
                ["5", "0,90×0,45×0,06", "0,55×0,15×0,12", "-", "31 200"],
                ["6", "0,90×0,50×0,08", "0,60×0,20×0,12", "0,05256", "38 300"],
                ["7", "1,00×0,45×0,05", "0,50×0,20×0,10", "0,0325", "25 800"],
                ["8", "1,00×0,45×0,06", "0,50×0,20×0,10", "-", "31 640"],
                ["9", "1,00×0,50×0,05", "0,60×0,20×0,12", "0,0394", "28 380"],
                ["10", "1,00×0,50×0,06", "0,60×0,20×0,12", "0,0444", "33 860"],
                ["11", "1,00×0,50×0,08", "0,60×0,20×0,15", "0,058", "43 950"],
                ["12", "1,00×0,80×0,06", "0,60×0,20×0,15", "0,066", "49 840"],
                ["13", "1,00×0,90×0,06", "0,60×0,20×0,15", "0,072", "51 600"],
                ["14", "1,10×0,50×0,06", "0,60×0,20×0,12", "0,0474", "38 750"],
                ["15", "1,10×0,50×0,08", "0,60×0,20×0,15", "0,062", "46 600"],
                ["16", "1,10×0,60×0,06", "0,70×0,20×0,15", "0,0606", "45 840"],
                ["17", "1,10×0,70×0,06", "0,80×0,20×0,15", "0,0702", "52 950"],
                ["18", "1,10×0,80×0,06", "0,90×0,20×0,15", "0,0798", "60 960"],
                ["19", "1,20×0,50×0,05", "0,60×0,20×0,12", "0,0444", "33 880"],
                ["20", "1,20×0,50×0,06", "0,60×0,20×0,12", "0,0504", "40 960"],
                ["21", "1,20×0,50×0,08", "0,60×0,20×0,12", "-", "49 840"],
                ["22", "1,20×0,60×0,08", "0,70×0,20×0,15", "0,0786", "59 200"],
                ["23", "1,30×0,65×0,08", "0,75×0,25×0,15", "0,95725", "71 850"],
                ["24", "1,50×0,70×0,085", "0,75×0,25×0,15", "0,11738", "86 860"]
            ]
        }
    ],
    'marble': [
        {
            name: "Комплект мраморный",
            options: [
                ["1", "0,50×0,40×0,04", "0,50×0,20×0,08", "-", "7 300"],
                ["2", "0,60×0,40×0,04", "0,50×0,20×0,08", "-", "7 860"],
                ["3", "0,65×0,40×0,04", "0,50×0,20×0,08", "-", "9 200"],
                ["4", "0,70×0,40×0,04", "0,50×0,20×0,08", "-", "9 540"],
                ["5", "0,75×0,40×0,04", "0,50×0,50×0,08", "-", "9 800"],
                ["6", "0,80×0,40×0,04", "0,50×0,20×0,08", "-", "10 100"],
                ["7", "0,80×0,45×0,06", "0,55×0,20×0,15", "-", "13 025"],
                ["8", "0,90×0,40×0,04", "0,50×0,20×0,08", "-", "10 660"],
                ["9", "0,90×0,45×0,06", "0,55×0,20×0,15", "-", "13 970"],
                ["10", "1,00×0,40×0,04", "0,50×0,20×0,08", "-", "11 220"],
                ["11", "1,00×0,45×0,06", "0,60×0,20×0,10", "-", "17 245"],
                ["12", "1,00×0,45×0,08", "0,55×0,20×0,10", "-", "19 200"],
                ["13", "1,10×0,50×0,08", "0,60×0,20×0,10", "-", "23 700"],
                ["14", "1,10×0,55×0,08", "0,70×0,20×0,10", "-", "24 700"],
                ["15", "1,20×0,50×0,08", "0,65×0,20×0,10", "-", "25 100"],
                ["16", "1,20×0,60×0,08", "0,70×0,20×0,15", "-", "26 200"]
            ]
        }
    ],
    'portraits': [
        {
            name: "Гравировка портретов",
            options: [
                ["1", "Гравировка портрета 25×30", "-", "9000"],
                ["2", "Гравировка портрета 30×40", "-", "10000"],
                ["3", "Гравировка портрета по пояс", "-", "16000"],
                ["4", "Ретушь", "-", "1000"],
                ["5", "Гравировка символов (крест, лавр, звезда)", "-", "800"],
                ["6", "Гравировка эксклюзивных символов (розы, гвоздика, лавровая ветка, рябина)", "1шт", "1000"],
                ["7", "Гравировка знаков (эпитафия)", "45 за знак", "45"],
                ["8", "Гравировка знаков (ФИО, ДР и ДС)", "45 за знак", "45"]
            ]
        }
    ],
    'emblems': [
        {
            name: "Гравировка эмблем",
            options: [
                ["1", "Ангелочек", "-", "1500"],
                ["2", "Ветка березовая с крестом и голубем", "-", "3500"],
                ["3", "Ветка березовая с крестом и ангелом", "-", "3500"],
                ["4", "Ветка березовая с крестом объемным", "-", "3500"],
                ["5", "Дубовая листва", "1500 за 1 рисунок", "1500"],
                ["6", "Рябина объемная", "-", "3000"],
                ["7", "Березка", "-", "4000"],
                ["8", "Церковь с куполами", "-", "3000"],
                ["9", "Куст рябины, калины", "-", "800"]
            ]
        }
    ],
    'shape': [
        {
            name: "Форма памятника",
            options: [
                ["1", "Волна", "-", "3500"],
                ["2", "Плечики", "-", "4500"],
                ["3", "Сердечко", "-", "4500"],
                ["4", "Крест с вуалью", "-", "7000"],
                ["5", "Крест", "-", "6000"]
            ]
        }
    ],
    'flowerbeds-black-granite': [
        {
            name: "Цветник из черного гранита",
            options: [
                ["1", "1.0 (комплект)", "8 500"],
                ["2", "1.2 (комплект)", "10 000"]
            ]
        }
    ],
    'flowerbeds-marble': [
        {
            name: "Цветник из мрамора",
            options: [
                ["1", "1.0 (комплект)", "7 000"],
                ["2", "1.2 (комплект)", "8 000"]
            ]
        }
    ],
    'vases-black-granite': [
        {
            name: "Вазы из черного гранита",
            options: [
                ["1", "Высота 38 см, ширина 9 см", "-", "6000"],
                ["2", "Высота 29 см, ширина 13 см", "-", "10000"],
                ["3", "Высота 39 см, ширина 39 см", "-", "11000"],
                ["4", "Свечник высота 30 см, ширина 18 см", "-", "11000"]
            ]
        }
    ],
    'vases-marble': [
        {
            name: "Вазы из мрамора",
            options: [
                ["1", "Полуваза", "-", "4000"]
            ]
        }
    ],
    'crosses': [
        {
            name: "Кресты",
            options: [
                ["1", "Кованный", "-", "8 500"],
                ["2", "Деревянный", "-", "4 000"],
                ["3", "Металлический", "3900-4000", "0"] // Цена 0 - будет вводиться вручную
            ]
        }
    ]
};
// Глобальные переменные для поиска и редактирования
let editMode = false;
const originalProductsData = JSON.parse(JSON.stringify(productsData)); // Копия оригинальных данных

const services = {
    'installation': { name: "Установка", price: 500 },
    'delivery': { name: "Доставка", price: 300 }
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedServices = JSON.parse(localStorage.getItem('selectedServices')) || [];

function toggleSubmenu(element, menuId) {
    const submenu = document.getElementById(menuId);
    submenu.classList.toggle('active');
    element.classList.toggle('active');
}

function showProducts(category) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    
    if (!productsData[category]) return;
     if (!productsData[category]) return;
    
    // Специальная обработка для металлического креста
    if (category === 'crosses') {
        productsData[category].forEach(product => {
            let tableHTML = `
                <div style="margin-bottom: 30px;">
                    <h3>${product.name}</h3>
                    <table class="product-table">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Название</th>
                                <th>Примечание</th>
                                <th>Цена</th>
                                <th>Кол-во</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            product.options.forEach(option => {
                if (option[0] === "3") { // Металлический крест
                    tableHTML += `
                        <tr>
                            <td>${option[0]}</td>
                            <td>${option[1]}</td>
                            <td>${option[2]}</td>
                            <td>
                                <input type="number" id="metal-cross-price" 
                                       min="3900" max="4000" value="3950"
                                       style="width: 80px;"> руб
                            </td>
                            <td><input type="number" min="1" value="1" id="qty-crosses-${option[0]}"></td>
                            <td><button onclick="addCustomPriceToCart('crosses', '${option[1]}', 'qty-crosses-${option[0]}', 'metal-cross-price')">Добавить</button></td>
                        </tr>
                    `;
                } else {
                    const price = parseInt(option[3].replace(/\s+/g, '')) || 0;
                    tableHTML += `
                        <tr>
                            <td>${option[0]}</td>
                            <td>${option[1]}</td>
                            <td>${option[2]}</td>
                            <td>${option[3]} руб</td>
                            <td><input type="number" min="1" value="1" id="qty-crosses-${option[0]}"></td>
                            <td><button onclick="addToCart('crosses', '${option[1]}', ${price}, '${option[0]}')">Добавить</button></td>
                        </tr>
                    `;
                }
            });
            
            tableHTML += `
                        </tbody>
                    </table>
                </div>
            `;
            productsDiv.innerHTML = tableHTML;
        });
        return;
    }
    const isEngraving = ['portraits', 'emblems'].includes(category);
    const isShape = category === 'shape';
    const isFlowerbed = category.includes('flowerbeds');
    const isVase = category.includes('vases');
    
    productsData[category].forEach(product => {
        let tableHTML = `
            <div style="margin-bottom: 30px;">
                <h3>${product.name}</h3>
                <table class="product-table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>${isVase || isFlowerbed ? 'Описание' : isEngraving || isShape ? 'Название' : 'Стелла'}</th>
                            ${isVase || isFlowerbed ? '' : `<th>${isEngraving || isShape ? 'Примечания' : 'Тумба'}</th>`}
                            ${isEngraving || isShape || isVase || isFlowerbed ? '' : '<th>Объем (куб.м)</th>'}
                            <th>Цена</th>
                            <th>Кол-во</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        product.options.forEach(option => {
            // Обработка ваз и цветников
            if (isVase || isFlowerbed) {
                const price = parseInt(option[3]?.toString().replace(/\s+/g, '') || option[2]?.toString().replace(/\s+/g, '') || 0);
                const description = option[1];
                tableHTML += `
                    <tr>
                        <td>${option[0]}</td>
                        <td>${description}</td>
                        <td>${option[3] || option[2]} руб</td>
                        <td><input type="number" min="1" value="1" id="qty-${category}-${option[0]}"></td>
                        <td><button onclick="addToCart('${category}', '${product.name} (${description})', ${price}, '${option[0]}')">Добавить</button></td>
                    </tr>
                `;
            }
            // Обработка гравировки текста
            else if ((category === 'portraits') && (option[0] === "7" || option[0] === "8")) {
                tableHTML += `
                    <tr>
                        <td>${option[0]}</td>
                        <td class="size-cell">${option[1]}</td>
                        <td>
                            <textarea class="engraving-input" 
                                      placeholder="Введите текст" 
                                      data-price="${option[3]}"
                                      data-counter="counter${option[0]}"></textarea>
                            <div class="engraving-info">
                                Символов: <span id="counter${option[0]}">0</span> | 
                                Цена: <span class="engraving-price">0</span> руб
                            </div>
                        </td>
                        <td>${option[3]} руб/символ</td>
                        <td><button onclick="addEngravingToCart(${option[0]})">Добавить</button></td>
                    </tr>
                `;
            }
            // Обработка остальных товаров
            else {
                const priceIndex = isEngraving || isShape ? 3 : 4;
                const price = parseInt(option[priceIndex]?.toString().replace(/\s+/g, '') || 0);
                
                tableHTML += `
                    <tr>
                        <td>${option[0]}</td>
                        <td class="size-cell">${option[1]}</td>
                        <td class="size-cell">${option[2]}</td>
                        ${isEngraving || isShape ? '' : `<td>${option[3]}</td>`}
                        <td>${option[priceIndex]} руб</td>
                        <td><input type="number" min="1" value="1" id="qty-${category}-${option[0]}"></td>
                        <td><button onclick="addToCart('${category}', '${product.name} (${option[1]})', ${price}, '${option[0]}')">Добавить</button></td>
                    </tr>
                `;
            }
        });
        
        tableHTML += `
                    </tbody>
                </table>
            </div>
        `;
        productsDiv.innerHTML += tableHTML;
    });

    if (category === 'portraits') {
        initEngravingInputs();
    }
}

// Инициализация полей гравировки
function initEngravingInputs() {
    document.querySelectorAll('.engraving-input').forEach(input => {
        input.addEventListener('input', function() {
            const text = this.value.replace(/\s/g, '');
            const charCount = text.length;
            const price = parseInt(this.dataset.price) * charCount;
            const counterId = this.dataset.counter;
            
            document.getElementById(counterId).textContent = charCount;
            this.nextElementSibling.querySelector('.engraving-price').textContent = price;
        });
    });
}

// Добавление гравировки в корзину
function addEngravingToCart(optionId) {
    const input = document.querySelector(`.engraving-input[data-counter="counter${optionId}"]`);
    const text = input.value.trim();
    
    if (!text) {
        alert('Введите текст для гравировки!');
        return;
    }
    
    const charCount = text.replace(/\s/g, '').length;
    const pricePerChar = parseInt(input.dataset.price);
    const totalPrice = charCount * pricePerChar;
    
    const row = input.closest('tr');
    const serviceName = row.querySelector('td:nth-child(2)').textContent;
    const shortText = text.length > 20 ? text.substring(0, 20) + '...' : text;
    
    addToCart('engraving', `${serviceName}: ${shortText}`, totalPrice, `chars-${charCount}`);
    
    // Очищаем поле
    input.value = '';
    document.getElementById(`counter${optionId}`).textContent = '0';
    row.querySelector('.engraving-price').textContent = '0';
}

function addToCart(category, productName, price, optionId) {
    const quantityInput = document.getElementById(`qty-${category}-${optionId}`);
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
    
    const existingItemIndex = cart.findIndex(item => 
        item.name === productName && item.price === price
    );
    
    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            category,
            name: productName,
            price,
            quantity
        });
    }
    
    updateCart();
    saveCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    saveCart();
}

function toggleService(element, serviceId) {
    element.classList.toggle('selected');
    
    const existingIndex = selectedServices.findIndex(s => s.id === serviceId);
    
    if (existingIndex >= 0) {
        selectedServices.splice(existingIndex, 1);
    } else {
        selectedServices.push({
            id: serviceId,
            name: services[serviceId].name,
            price: services[serviceId].price
        });
    }
    
    updateCart();
    saveCart();
}

function updateCart() {
    const orderItems = document.getElementById('order-items');
    orderItems.innerHTML = '';
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        orderItems.innerHTML += `
            <div class="service-item">
                <div>
                    <span>${item.name} x${item.quantity}</span>
                    <button class="small-button" onclick="removeFromCart(${index})">Удалить</button>
                </div>
                <span>${itemTotal.toLocaleString()} руб</span>
            </div>
        `;
        total += itemTotal;
    });

    selectedServices.forEach(service => {
        orderItems.innerHTML += `
            <div class="service-item">
                <span>${service.name}</span>
                <span>${service.price} руб</span>
            </div>
        `;
        total += service.price;
    });

    document.getElementById('total').textContent = total.toLocaleString();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
}

function clearCart() {
    if (confirm("Вы действительно хотите очистить корзину?")) {
        cart = [];
        selectedServices = [];
        saveCart();
        updateCart();
        
        document.querySelectorAll('.service-item').forEach(item => {
            item.classList.remove('selected');
        });
    }
}

function checkout() {
    if (cart.length === 0 && selectedServices.length === 0) {
        alert("Корзина пуста!");
        return;
    }

    const total = parseInt(document.getElementById('total').textContent.replace(/\s+/g, '')) || 0;
    const order = {
        date: new Date().toLocaleString(),
        items: [...cart],
        services: [...selectedServices],
        total
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(order));
    
    let orderDetails = `
        <div style="background: #fffaf5; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <h2>Детали заказа</h2>
            <p><strong>Дата:</strong> ${order.date}</p>
            
            <h3>Состав заказа:</h3>
            <table class="product-table">
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    order.items.forEach((item, index) => {
        orderDetails += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price.toLocaleString()} руб</td>
                <td>${(item.price * item.quantity).toLocaleString()} руб</td>
                <td><button class="small-button" onclick="removeFromOrder(${index})">Удалить</button></td>
            </tr>
        `;
    });
    
    order.services.forEach(service => {
        orderDetails += `
            <tr>
                <td>${service.name}</td>
                <td>1</td>
                <td>${service.price} руб</td>
                <td>${service.price} руб</td>
                <td></td>
            </tr>
        `;
    });
    
    orderDetails += `
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3">Итого:</th>
                        <th>${total.toLocaleString()} руб</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
            
            <div style="margin-top: 20px; display: flex; justify-content: space-between;">
                <button onclick="clearCartAndReturn()">Новый заказ</button>
                <button onclick="returnToMainPage()">Вернуться к заказу</button>
            </div>
        </div>
    `;
    
    document.getElementById('products').innerHTML = orderDetails;
}

function removeFromOrder(index) {
    cart.splice(index, 1);
    saveCart();
    checkout();
}
function addCustomPriceToCart(category, productName, qtyId, priceId) {
    const quantity = parseInt(document.getElementById(qtyId).value) || 1;
    const price = parseInt(document.getElementById(priceId).value) || 0;
    
    if (price < 3900 || price > 4000) {
        alert("Цена должна быть в диапазоне 3900-4000 руб");
        return;
    }
    
    addToCart(category, productName, price, 'custom-price');
}
function clearCartAndReturn() {
    clearCart();
    document.getElementById('products').innerHTML = '';
}

function returnToMainPage() {
    document.getElementById('products').innerHTML = '';
}

// ========== ФУНКЦИИ ПОИСКА ==========
function performSearch() {
    const query = document.getElementById('global-search').value.toLowerCase().trim();
    if (!query) {
        const lastCategory = localStorage.getItem('lastCategory');
        if (lastCategory) showProducts(lastCategory);
        return;
    }

    let results = [];
    
    Object.keys(productsData).forEach(category => {
        productsData[category].forEach(product => {
            product.options.forEach(option => {
                const searchText = `${product.name} ${option.join(' ')}`.toLowerCase();
                if (searchText.includes(query)) {
                    results.push({ category, product, option });
                }
            });
        });
    });
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    
    if (results.length === 0) {
        productsDiv.innerHTML = '<div class="no-results">Ничего не найдено</div>';
        return;
    }
    
    let html = `<div class="search-results"><h2>Найдено ${results.length} товаров</h2><div class="results-grid">`;
    
    results.forEach(item => {
        const price = item.option[item.option.length - 1];
        html += `
            <div class="result-item">
                <div class="result-category">${item.product.name}</div>
                <div class="result-name">${item.option[1]}</div>
                <div class="result-price">${price} руб</div>
                <button onclick="showProducts('${item.category}')">Перейти</button>
            </div>
        `;
    });
    
    productsDiv.innerHTML = html + '</div></div>';
}

// ========== ФУНКЦИИ РЕДАКТИРОВАНИЯ ==========
function toggleEditMode() {
    editMode = !editMode;
    document.body.classList.toggle('edit-mode');
    document.getElementById('edit-toggle').textContent = 
        editMode ? 'Закрыть редактирование' : 'Режим редактирования';
    
    if (editMode) {
        makeAllTablesEditable();
    } else {
        saveAllChanges();
    }
}

function makeAllTablesEditable() {
    document.querySelectorAll('.product-table').forEach(makeTableEditable);
}

function makeTableEditable(table) {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td:not(:last-child)');
        cells.forEach((cell, index) => {
            if (index === 0) return;
            const text = cell.textContent.trim();
            cell.innerHTML = `<input class="edit-field" value="${text}">`;
        });
    });
}

function saveAllChanges() {
    let hasChanges = false;
    document.querySelectorAll('.product-table').forEach(table => {
        const category = table.closest('div').querySelector('h3').textContent;
        table.querySelectorAll('tbody tr').forEach(row => {
            const optionId = row.querySelector('td:first-child').textContent;
            const inputs = row.querySelectorAll('.edit-field');
            
            inputs.forEach((input, index) => {
                const newValue = input.value;
                // Находим и обновляем данные
                productsData[category].options.find(opt => opt[0] === optionId)[index + 1] = newValue;
                hasChanges = true;
            });
        });
    });
    
    if (hasChanges) {
        localStorage.setItem('productsData', JSON.stringify(productsData));
        alert('Изменения сохранены!');
    }
}

window.onload = () => {
    // Загружаем сохраненные данные
    if (localStorage.getItem('productsData')) {
        productsData = JSON.parse(localStorage.getItem('productsData'));
    }

    // Инициализация корзины
    updateCart();
    
    // Инициализация сервисов
    selectedServices.forEach(service => {
        const el = document.querySelector(`.service-item[onclick*="${service.id}"]`);
        if (el) el.classList.add('selected');
    });

    // Обработчик поиска по Enter
    document.getElementById('global-search')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
};