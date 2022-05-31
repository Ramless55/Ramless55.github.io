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
    document.addEventListener('keypress', (event) => {
        if(event.key !== 'Enter') return;

        if(!element.classList.contains('focusNext')) return;

        let element = event.target;
        let tabIndex = element.tabIndex + 1;
        let next = document.querySelector(`[tabindex=${tabIndex}]`);

        if(next){
            next.focus();
            event.preventDefault();
        }
    })

    //boton que te regresa a la pagina principal
    back.addEventListener('click', () => {
        window.location.href = "../index.html";
    })


})