window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('input[type = "text"]')
    const pass = document.querySelector('input[type = "password"]');
    const button = document.querySelector('input[type = "submit"]');
    const back = document.querySelector('#button-img');

    button.addEventListener('click', (event) => {
        event.preventDefault();

    });

    back.addEventListener('click', () => {
        window.location.href = "../index.html";
    })


})