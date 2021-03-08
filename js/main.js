const products = [{
        id: 1,
        title: 'Notebook',
        price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1500
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 5000
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 4500
    },
    {
        id: 5,
    },
];

const renderProduct = (title = 'Product name', price = 0) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const catalogInit = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList.join('');
};

catalogInit(products);