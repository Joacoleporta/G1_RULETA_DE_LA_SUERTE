// Obtén todos los elementos con la clase btnred y btnblue
const buttons = document.querySelectorAll('.btnred, .btnblue');

// Itera sobre cada botón
buttons.forEach(button => {
  // Agrega un evento de clic a cada botón
  button.addEventListener('click', function () {
    // Obtén la ruta del audio del atributo data-audio
    const audioPath = this.getAttribute('data-audio');

    // Crea un nuevo elemento de audio
    const audio = new Audio(audioPath);

    // Reproduce el audio
    audio.play();
  });
});