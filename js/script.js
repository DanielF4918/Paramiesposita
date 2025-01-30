function abrirSobre() {
    let carta = document.querySelector('.carta');
    let sobre = document.querySelector('.sobre');
    
    // Si la carta está abierta, proceder a guardarla en el sobre
    if (carta.classList.contains('abierta')) {
        carta.classList.remove('abierta');
        carta.classList.add('cerrada');
        
        // Mover la tapa hacia abajo y poner la carta dentro
        setTimeout(() => {
            sobre.style.transform = 'scale(1) translateY(0)';
            carta.style.transform = 'translateY(0)';
            document.querySelector('.nota').style.transform = 'translateY(50px)';
            document.querySelector('.sello').style.opacity = 1; // Mostrar el sello cuando está cerrado
        }, 1000); // Esperar un segundo para que la carta esté fuera antes de cerrarlo

        // Detener las animaciones de corazones y flores
        detenerAnimaciones();
    } else {
        // Si la carta está cerrada, abrir el sobre y sacar la carta
        carta.classList.remove('cerrada');
        carta.classList.add('abierta');
        
        // Abrir la tapa y mover la carta hacia arriba
        setTimeout(() => {
            document.querySelector('.nota').style.transform = 'translateY(-150px)';
            document.querySelector('.sello').style.opacity = 0; // Ocultar el sello cuando está abierto
            sobre.style.transform = 'scale(0.85) translateY(-60px)'; // Reducir y mover el sobre hacia abajo
        }, 100); // Espera mínima para que la animación se inicie correctamente
        
        lanzarAnimaciones();
    }
}

function lanzarAnimaciones() {
    const contenedor = document.querySelector('.animaciones');
    for (let i = 0; i < 20; i++) {
        let elemento = document.createElement('span');
        elemento.innerHTML = Math.random() > 0.5 ? '❤️' : '🌸';
        elemento.classList.add('flotando');
        elemento.style.left = Math.random() * 100 + 'vw';
        elemento.style.animationDuration = (Math.random() * 2 + 3) + 's';
        contenedor.appendChild(elemento);
        setTimeout(() => {
            elemento.remove();
        }, 5000);
    }
}

// Función para detener las animaciones de los corazones y flores
function detenerAnimaciones() {
    const contenedor = document.querySelector('.animaciones');
    while (contenedor.firstChild) {
        contenedor.firstChild.remove(); // Eliminar todos los elementos flotantes
    }
}
