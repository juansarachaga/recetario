document.addEventListener("DOMContentLoaded", function() {
    var btnAcocinar = document.getElementById("btnAcocinar");

    // Función para verificar si el botón está visible en la ventana
    function isButtonVisible() {
        var rect = btnAcocinar.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para agregar la animación cuando el botón sea visible
    function addButtonAnimation() {
        if (isButtonVisible()) {
            btnAcocinar.classList.add("animacionBoton");
            window.removeEventListener("scroll", addButtonAnimation); // Elimina el listener una vez que se activa la animación
        }
    }

    // Agrega un listener para activar la animación cuando se hace scroll
    window.addEventListener("scroll", addButtonAnimation);

    // Agrega un listener para activar la animación si el botón ya es visible cuando la página se carga
    addButtonAnimation();

    // Función para manejar el evento click del botón
    function handleClick(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        // Agrega aquí lo que quieras que haga el botón al hacer clic
        console.log("¡Hiciste clic en el botón!");
        // Por ejemplo, puedes redirigir a otra página
        setTimeout(function() {
            window.location.href = btnAcocinar.getAttribute("href");
        }, 1000); // Redirige después de cierto tiempo (aquí 1 segundo)
    }

    // Agrega el evento click al botón
    btnAcocinar.addEventListener("click", handleClick);
});
