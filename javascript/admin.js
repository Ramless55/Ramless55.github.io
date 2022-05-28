window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('input[type = "submit"]');
    const back = document.querySelector('#button-img');

    button.addEventListener('click', (event) => {
        const name = document.querySelector('#name').value;
        const pass = document.querySelector('#password').value;

        event.preventDefault();

        const admin = {
            nameOne: 'Ramless',
            nameTwo: 'Lean',
            password: 'admin'
        }

        name === admin.nameOne && pass === admin.password || name === admin.nameTwo && pass === admin.password?
            window.location.href = "./admin-panel.html":
            document.querySelector('#error-message').style.display = 'block';

    });

    back.addEventListener('click', () => {
        window.location.href = "../index.html";
    })


})