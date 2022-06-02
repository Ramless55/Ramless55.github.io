const products = JSON.parse(localStorage.getItem('products')) || [];
const itemList = document.querySelector('.products-container');

function productList(product = [], itemsList){
    itemsList.innerHTML = product.map((product)  => {
        return `     
    <div class="product-card">
        <div id="product-img">
            <img src="${product.image}" alt="Imagen del producto">
        </div>
        <div id="product-info">
            <a href="#" id="product-name">${product.name}&nbsp;</a>
            <a href="#" id="product-price">$${product.price}</a>
        </div>
    </div>
    `
    }).join('');
}

let url = window.location.href;
let filename = url.substr(url.lastIndexOf("/") + 1);
console.log(filename)

function filterList(product = [], itemsList, filename){
    itemsList.innerHTML = product.map((product)  => {
        if(product.types === 'Manga' && filename === 'productos-mangas.html'){
            console.log('entro');
            return `     
            <div class="product-card">
                <div id="product-img">
                    <img src="${product.image}" alt="Imagen del producto">
                </div>
                <div id="product-info">
                    <a href="#" id="product-name">${product.name}&nbsp;</a>
                    <a href="#" id="product-price">$${product.price}</a>
                </div>
            </div>
            `
        }else if(product.types === 'Comic' && filename === 'productos-comic.html'){
            console.log('entro');
            return `     
            <div class="product-card">
                <div id="product-img">
                    <img src="${product.image}" alt="Imagen del producto">
                </div>
                <div id="product-info">
                    <a href="#" id="product-name">${product.name}&nbsp;</a>
                    <a href="#" id="product-price">$${product.price}</a>
                </div>
            </div>
            `
        }else if(product.types === 'Figura' && filename === 'productos-figura.html'){
            console.log('entro');
            return `     
            <div class="product-card">
                <div id="product-img">
                    <img src="${product.image}" alt="Imagen del producto">
                </div>
                <div id="product-info">
                    <a href="#" id="product-name">${product.name}&nbsp;</a>
                    <a href="#" id="product-price">$${product.price}</a>
                </div>
            </div>
            `
        }
    }).join('');
    }

if(filename === 'productos.html'){
    productList(products, itemList);
}else{
    filterList(products, itemList, filename)
}



