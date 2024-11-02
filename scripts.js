
// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.querySelector('.hamburger-container')

let isActive = false
hamburger.addEventListener('click', () => {
    if (isActive) {
        hamburgerMenu.classList.remove('show')
        isActive = false        
    }else {
        hamburgerMenu.classList.add('show')
        isActive = true
    }
})

let index = 0;

function mostrarImagen() {
    const imagenes = document.querySelector('.imagenes');
    const totalImagenes = document.querySelectorAll('.imagenes img').length;
    const offset = index * -1000; // Ancho de las imágenes
    imagenes.style.transform = `translateX(${offset}px)`;
}

function cambiarImagen(direccion) {
    const totalImagenes = document.querySelectorAll('.imagenes img').length;
    index += direccion;

    if (index < 0) {
        index = totalImagenes - 1;
    } else if (index >= totalImagenes) {
        index = 0;
    }

    mostrarImagen();
}