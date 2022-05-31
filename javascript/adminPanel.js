window.addEventListener('DOMContentLoaded', () => {

    //redirecciona a las diferentes pestañas del panel de admin
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

        //hace que al estar en una pestaña su boton permanezca de color
        document.querySelector('.active').style.background = '#ac3a92';
        document.querySelector('.active').style.color = 'white';
    }

    //funcion para cargar los productos
    const chargeProducts = () => {
        const button = document.querySelector('#button');
        const products = JSON.parse(localStorage.getItem('products')) || [];

        //lee los productos del formulario
        const addItem = (event) => {
            const name = document.querySelector('#name').value;
            const price = document.querySelector('#price').value;
            const image = document.querySelector('#image-link').value;
            const description = document.querySelector('#description').value;
            const types = document.querySelector('#types').value;

            //crea el objeto con la informacion del producto
            const product = {
              name: name,
              price: price,
              image: image,
              description: description,
              types: types
            }
          
            //agrega el producto al array de productos
            products.push(product);
            //carga el prodcuto al Local Storage
            localStorage.setItem('products', JSON.stringify(products));

            //pone en blanco los inputs nuevamente
            document.querySelector('[name=Name]').value = ''
            document.querySelector('[name=Price]').value = ''
            document.querySelector('[name=Image]').value = ''
            document.querySelector('[name=Description]').value = ''
            document.querySelector('[name=Types]').value = ''
          }

          //boton para enviar el formulario
        button.addEventListener('click', (event) => {
            event.preventDefault();
            //llama a la funcion para agregar el producto
            addItem();
            //muestra el popup difuminando el fondo para que no se pueda escribir
            document.querySelector('#difuminated').style.display = 'flex';
            //boton de cerrar del popup
            document.querySelector('#close').addEventListener('click', () => {
                //vuelve a ocultar el popup
                document.querySelector('#difuminated').style.display = 'none';
            })
        });

    }

    menu();
    chargeProducts();
    
})