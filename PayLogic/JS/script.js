// Verifica si estamos en la página registro
if (document.getElementById('registroForm')) {
    document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var mensaje = document.getElementById('mensaje');

    // Limpia las clases previas del mensaje
    mensaje.classList.remove('error', 'success');

    if (password1 !== password2) {
        mensaje.classList.add('error'); // Agrega la clase de error
        mensaje.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    if (!isValidPassword(password1)) {
        mensaje.classList.add('error'); // Agrega la clase de error
        mensaje.textContent = 'La contraseña no cumple con los requisitos mínimos.';
        return;
    }

    mensaje.classList.add('success'); // Agrega la clase de éxito
    mensaje.textContent = 'Registro exitoso!';

    setTimeout(function() {
        window.location.href = 'index.html'; // Cambiado a index.html
    }, 3000);
});

function isValidPassword(password) {
    // Expresión regular para validar: al menos 8 caracteres, una mayúscula, una minúscula y un dígito
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(password);
}
}

$(document).ready(function() {
    // Función para manejar clic en los enlaces del menú horizontal
    $('#home-page .menu-horizontal a').click(function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Si el enlace ya tiene la clase 'clicked', la remueve; de lo contrario, la añade
        $(this).toggleClass('clicked');

        // Mover el ícono horizontalmente usando una transformación CSS
        var icon = $(this).find('i'); // Selecciona el ícono dentro del enlace clicado
        if ($(this).hasClass('clicked')) {
            icon.css('transform', 'translateX(5px)'); // Mueve el ícono 5px a la derecha
        } else {
            icon.css('transform', 'translateX(0)'); // Restaura la posición original del ícono
        }
    });

    // Animación al hacer hover sobre el título
    $('#home-page .title-bar h1').hover(
        function() {
            $(this).css('transform', 'scale(1.1)'); // Aumenta el tamaño al 110%
        },
        function() {
            $(this).css('transform', 'scale(1)'); // Restaura el tamaño original
        }
    );

    // Movimiento al hacer hover en el botón de cerrar sesión
    $('#home-page .logout-button').hover(
        function() {
            $(this).css('transform', 'translateX(5px)'); // Mueve el botón 5px a la derecha
        },
        function() {
            $(this).css('transform', 'translateX(0)'); // Restaura la posición original
        }
    );

    // Movimiento al hacer hover en los enlaces del menú horizontal
    $('#home-page .menu-horizontal a').hover(
        function() {
            $(this).find('i').css('transform', 'translateX(5px)'); // Mueve el ícono 5px a la derecha
        },
        function() {
            $(this).find('i').css('transform', 'translateX(0)'); // Restaura la posición original del ícono
        }
    );

    // Función para manejar clic en los enlaces del menú lateral
    $('#sidebar .menu ul li a').click(function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Si el enlace ya tiene la clase 'clicked', la remueve; de lo contrario, la añade
        $(this).toggleClass('clicked');

        // Mover el ícono horizontalmente usando una transformación CSS
        var icon = $(this).find('i'); // Selecciona el ícono dentro del enlace clicado
        if ($(this).hasClass('clicked')) {
            icon.css('transform', 'translateX(5px)'); // Mueve el ícono 5px a la derecha
        } else {
            icon.css('transform', 'translateX(0)'); // Restaura la posición original del ícono
        }
    });

    // Movimiento al hacer hover en los enlaces del menú lateral
    $('#sidebar .menu ul li a').hover(
        function() {
            $(this).find('i').css('transform', 'translateX(5px)'); // Mueve el ícono 5px a la derecha
        },
        function() {
            $(this).find('i').css('transform', 'translateX(0)'); // Restaura la posición original del ícono
        }
    );

    // Movimiento al hacer hover en el enlace del calendario en la barra lateral
    $('#sidebar .bottom-section a').hover(
        function() {
            $(this).find('i').css('transform', 'translateX(5px)'); // Mueve el ícono del calendario 5px a la derecha
        },
        function() {
            $(this).find('i').css('transform', 'translateX(0)'); // Restaura la posición original del ícono del calendario
        }
    );

    // Función para manejar clic en el enlace del calendario en la barra lateral
    $('#sidebar .bottom-section a').click(function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Si el enlace ya tiene la clase 'clicked', la remueve; de lo contrario, la añade
        $(this).toggleClass('clicked');

        // Mover el ícono horizontalmente usando una transformación CSS
        var icon = $(this).find('i'); // Selecciona el ícono dentro del enlace clicado
        if ($(this).hasClass('clicked')) {
            icon.css('transform', 'translateX(5px)'); // Mueve el ícono 5px a la derecha
        } else {
            icon.css('transform', 'translateX(0)'); // Restaura la posición original del ícono
        }
    });
});
