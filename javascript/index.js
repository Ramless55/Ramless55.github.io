const carrousel = () => {
    const big = document.querySelector('.big');
    const point = document.querySelectorAll('.point');

    point.forEach( (eachPoint, index) => {
        point[index].addEventListener('click', () => {

            let operation = index * -25;

            big.style.transform = `translateX(${operation}%)`;

            point.forEach((eachPoint, index) => {
                point[index].classList.remove('active');
            })
            point[index].classList.add('active');
        })
    })
}

const keyLoger =  () => {
    const pressed = [];
    const secretCode = "admin";

    window.addEventListener("keyup", (event) => {
        pressed.push(event.key);
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

        if (pressed.join("") === secretCode) {
            window.location.href = "./html/admin.html";
        }
    });

}

carrousel();
keyLoger();