const products = JSON.parse(localStorage.getItem('products')) || [];
const itemList = document.querySelector('.products-container');

productList(products, itemList);

function productList(product = [], itemsList){
    itemsList.innerHTML = product.map((product, i)  => {
        return `     
    <div class="product-card">
        <div id="product-img">
            <img src="${product.image}" alt="Imagen del producto">
        </div>
        <div id="product-info">
            <a href="#" id="product-name">${product.name}</a>
            <a href="#" id="product-price">$${product.price}</a>
        </div>
    </div>
    `
    }).join('');
}
