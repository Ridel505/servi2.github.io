$(document).ready(function () {
    let currentIndex = 0;
    const images = $(".slideshow img");
    const imageCount = images.length;

    // Función para mostrar la siguiente imagen
    function showNextImage() {
        // Oculta la imagen actual
        images.eq(currentIndex).fadeOut(1000);
        
        // Calcula el índice de la siguiente imagen
        currentIndex = (currentIndex + 1) % imageCount;

        // Muestra la siguiente imagen
        images.eq(currentIndex).fadeIn(1000);
    }

    // Cambia la imagen cada 3 segundos
    setInterval(showNextImage, 3000);
});
