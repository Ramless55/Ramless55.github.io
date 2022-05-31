//carrusel que muestra las noticias de la pagina
const carrousel = () => {
    const big = document.querySelector('.big');
    const point = document.querySelectorAll('.point');

    point.forEach( (eachPoint, index) => {
        point[index].addEventListener('click', () => {
            //operacion para calcular el movimiento de las imagenes
            let operation = index * -25;
            //mueve las imagenes con la operacion anterior
            big.style.transform = `translateX(${operation}%)`;
            
            //activa y desactiva el color de los puntos
            point.forEach((eachPoint, index) => {
                point[index].classList.remove('active');
            })
            point[index].classList.add('active');
        })
    })
}

//funcion para que al escribir "admin" en la pantalla principal redirecciona al login de admin
    const keyLoger =  () => {
        const pressed = [];
        const secretCode = "admin";

        //recibe la informacion de las teclas
        window.addEventListener("keyup", (event) => {
            pressed.push(event.key);
            pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

            //cuando la calve es correcta redirecciona
            if (pressed.join("") === secretCode) {
                window.location.href = "./html/admin.html";
            }
        });
    }

carrousel();
keyLoger();