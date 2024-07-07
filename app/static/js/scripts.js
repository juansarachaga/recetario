document.addEventListener("DOMContentLoaded", function() {
    // Función para verificar si el botón está visible en la ventana
    function isButtonVisible(btn) {
        if (!btn) return false;
        var rect = btn.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para agregar la animación cuando el botón sea visible
    function addButtonAnimation(btn) {
        if (isButtonVisible(btn)) {
            btn.classList.add("animacionBoton");
            window.removeEventListener("scroll", function() { addButtonAnimation(btn); }); // Elimina el listener una vez que se activa la animación
        }
    }

    // Agrega un listener para activar la animación cuando se hace scroll
    var btnAcocinar = document.getElementById("btnAcocinar");
    if (btnAcocinar) {
        window.addEventListener("scroll", function() { addButtonAnimation(btnAcocinar); });
        addButtonAnimation(btnAcocinar); // Activar animación si el botón es visible al cargar la página
    }

    // Función para manejar el evento click del botón
    function handleClick(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        console.log("¡Hiciste clic en el botón!");
        setTimeout(function() {
            window.location.href = event.target.getAttribute("href");
        }, 1000); // Redirige después de cierto tiempo (aquí 1 segundo)
    }

    // Agrega el evento click al botón si existe
    if (btnAcocinar) {
        btnAcocinar.addEventListener("click", handleClick);
    }

    // Manejo de los menús desplegables
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    function handleClickDropdown(event) {
        event.preventDefault();
        var dropdownMenu = this.nextElementSibling;

        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        } else {
            var allDropdownMenus = document.querySelectorAll('.dropdown-menu');
            allDropdownMenus.forEach(function(menu) {
                menu.classList.remove('show');
            });
            dropdownMenu.classList.add('show');
        }
    }

    dropdownToggles.forEach(function(button) {
        button.addEventListener('click', handleClickDropdown);
    });

    // Cerrar menú desplegable si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdownMenus = document.querySelectorAll('.dropdown-menu');
            dropdownMenus.forEach(function(menu) {
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                }
            });
        }
    });

    // Scroll to top button
    var scrollTopButton = document.getElementById("scrollTopButton");
    if (scrollTopButton) {
        scrollTopButton.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
