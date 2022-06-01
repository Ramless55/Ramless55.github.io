window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('input[type = "submit"]');
    const back = document.querySelector('#button-img');

    button.addEventListener('click', (event) => {
        const name = document.querySelector('#name').value;
        const pass = document.querySelector('#password').value;

        event.preventDefault();

        //cuentas administrador
        const admin = {
            nameOne: 'Ramless',
            nameTwo: 'Lean',
            password: 'admin'
        }

        //verificacion de cuenta
        name === admin.nameOne && pass === admin.password || name === admin.nameTwo && pass === admin.password?
            window.location.href = "./adminPanelPages/admin-panel.html":
            document.querySelector('#error-message').style.display = 'block';

    });

    //funcion para que al apretar enter pase al siguiente input en vez de recargar
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, i) => {
      input.addEventListener('keydown', (event) => {
        console.log(event.key);
        if (i < inputs.length - 1 && event.key === 'Enter') {
          event.preventDefault();
          inputs[i + 1].focus();
        }
      });
    });

    //boton que te regresa a la pagina principal
    back.addEventListener('click', () => {
        window.location.href = "../index.html";
    })


})