// Función para adaptar la altura en dispositivos móviles
function ajustarPantalla() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', ajustarPantalla);
ajustarPantalla();

// Interacciones y efectos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');
    const langBtn = document.getElementById('langBtn');
    const tripticoContainer = document.getElementById('tripticoContainer');
    const btnText = langBtn.querySelector('span');
    
    // Efecto original de aparición suave al cargar
    panels.forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        panel.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Control del giro 3D para el cambio de idioma
    langBtn.addEventListener('click', () => {
        tripticoContainer.classList.toggle('flipped');

        if (tripticoContainer.classList.contains('flipped')) {
            btnText.textContent = 'Español';
        } else {
            btnText.textContent = 'English';
        }
    });
});

// Navegación original por teclado (flechas de dirección)
window.addEventListener('keydown', (e) => {
    const wrapper = document.querySelector('.triptico-wrapper');
    if (e.key === 'ArrowRight') {
        wrapper.scrollBy({ left: window.innerWidth / 3, behavior: 'smooth' });
    }
    if (e.key === 'ArrowLeft') {
        wrapper.scrollBy({ left: -window.innerWidth / 3, behavior: 'smooth' });
    }
});