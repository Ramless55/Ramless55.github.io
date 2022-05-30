window.addEventListener('DOMContentLoaded', () => {

    const menu = () => {
        const banner = document.querySelector('#banners');
        const news = document.querySelector('#new');
        const free = document.querySelector('#free');
        const product = document.querySelector('#product');
        const back = document.querySelector('#back');

        banner.addEventListener('click', () => {
            window.location.href = "./admin-banner.html";
        })

        news.addEventListener('click', () => {
            window.location.href = "./admin-news.html";
        })

        free.addEventListener('click', () => {
            window.location.href = "./admin-free.html";
        })

        product.addEventListener('click', () => {
            window.location.href = "./admin-product.html";
        })

        back.addEventListener('click', () => {
            window.location.href = "../../index.html";
        })


        document.querySelector('.active').style.background = '#ac3a92';
        document.querySelector('.active').style.color = 'white';
    }

    const chargeProducts = () => {
        const button = document.querySelector('#button');
        const products = JSON.parse(localStorage.getItem('products')) || []

        const addItem = (event) => {
            const name = document.querySelector('#name').value;
            const price = document.querySelector('#price').value;
            const image = document.querySelector('#image-link').value;
            const description = document.querySelector('#description').value;
            const types = document.querySelector('#types').value;

            const product = {
              name: name,
              price: price,
              image: image,
              description: description,
              types: types
            }
          
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));

            document.querySelector('[name=Name]').value = ''
            document.querySelector('[name=Price]').value = ''
            document.querySelector('[name=Image]').value = ''
            document.querySelector('[name=Description]').value = ''
            document.querySelector('[name=Types]').value = ''
          }

        button.addEventListener('click', (event) => {
            event.preventDefault();
            addItem();
            document.querySelector('#difuminated').style.display = 'flex';
            document.querySelector('#close').addEventListener('click', () => {
                document.querySelector('#difuminated').style.display = 'none';
            })
        });

    }

    menu();
    chargeProducts();
    
})