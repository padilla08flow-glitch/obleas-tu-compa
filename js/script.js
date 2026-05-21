// Función para adaptar la altura en dispositivos móviles
function ajustarPantalla() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', ajustarPantalla);
ajustarPantalla();

// Efecto de aparición suave al cargar
document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');
    
    panels.forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        panel.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// Puedes añadir navegación por teclado (flechas)
window.addEventListener('keydown', (e) => {
    const wrapper = document.querySelector('.triptico-wrapper');
    if (e.key === 'ArrowRight') {
        wrapper.scrollBy({ left: window.innerWidth / 3, behavior: 'smooth' });
    }
    if (e.key === 'ArrowLeft') {
        wrapper.scrollBy({ left: -window.innerWidth / 3, behavior: 'smooth' });
    }
});