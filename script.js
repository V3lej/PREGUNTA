const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const frame = document.getElementById('frame');
const messageBox = document.getElementById('messageBox');

// Función para mover el botón rojo a una posición aleatoria dentro del marco
function moveButtonRandomly() {
    const maxX = frame.offsetWidth - btnNo.offsetWidth; // Limite horizontal
    const maxY = frame.offsetHeight - btnNo.offsetHeight; // Limite vertical

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
}

// Cuando el mouse pasa por encima del botón rojo, lo mueve aleatoriamente
btnNo.addEventListener('mouseenter', () => {
    moveButtonRandomly();
});

// Cuando se hace clic en el botón rojo, también lo mueve aleatoriamente
btnNo.addEventListener('click', () => {
    moveButtonRandomly();
});

// Evento para mostrar el cuadro de mensaje cuando se hace clic en "Sí"
btnYes.addEventListener('click', () => {
    messageBox.style.display = 'block'; // Mostramos el cuadro de mensaje
});
