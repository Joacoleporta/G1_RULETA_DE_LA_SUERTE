  const animationContainer = document.getElementById('animationContainer');
  const images = document.querySelectorAll('.animated-image');
  const imageWidth = images[0].offsetWidth + 20; // Ancho de la imagen + margen derecho
  const duration = 20; // Duración en segundos
  let isCarouselRunning = true;
  let animationFrameId;
  
  // Clonar las imágenes y añadirlas al final del contenedor
  images.forEach(image => {
    const clone = image.cloneNode(true);
    animationContainer.appendChild(clone);
  });
  
  // Configurar el contenedor para que sea suficientemente ancho para contener todas las imágenes en fila
  animationContainer.style.width = `${imageWidth * images.length * 2}px`;
  
  function animateImages(timestamp) {
    const progress = (timestamp % (duration * 1000)) / (duration * 1000);
    const transformValue = -progress * imageWidth * images.length;
    animationContainer.style.transform = `translateX(${transformValue}px)`;
    animationFrameId = requestAnimationFrame(animateImages);
  }
  
  animateImages(performance.now());
  
  const nombres = ["Roxana","Elena"];
  let nombresNoRepetidos = [...nombres];
  let nombresEliminados = [];
  let nombresSalidos = [];
  let nombresGenerados = [];
  
  
  function generarNombre() {
    if (nombresNoRepetidos.length === 0) {
      mostrarModalSinParticipantes();
  
      return;
    }
  
   
    document.getElementById("btnGenerar").disabled = true;
    document.getElementById("imagenRotativa").style.animationPlayState = "running";
  
  
    let indiceAleatorio = Math.floor(Math.random() * nombresNoRepetidos.length);
    let nombreAleatorio = nombresNoRepetidos[indiceAleatorio];
  
    nombresEliminados.push(nombreAleatorio);
    nombresSalidos.push(nombreAleatorio);
  
    nombresNoRepetidos.splice(indiceAleatorio, 1);
  
    setTimeout(function () {
      document.getElementById("nombreMostrado").innerText = "";
  
      actualizarListas();
      
      document.getElementById("nombreMostrado").innerText = nombreAleatorio;
      document.getElementById("btnGenerar").disabled = false;
    }, 1000);
    document.getElementById("nombreMostrado").innerText = "";
  
  }
  
  // Función para mostrar el modal cuando no quedan participantes
  function mostrarModalSinParticipantes() {
    Swal.fire({
      icon: 'info',
      title: 'Sin Participantes',
      text: 'No quedan participantes para mostrar.',
    });
  
  }
  
  // Función para agregar un nuevo nombre al array
  function agregarNombre() {
    let nuevoNombre = document.getElementById("nombreNuevo").value.trim();
    if (nuevoNombre !== "") {
      nombres.push(nuevoNombre);
      nombresNoRepetidos.push(nuevoNombre);
      document.getElementById("nombreNuevo").value = "";
  
      // Actualizar la lista de nombres restantes
      actualizarListas();
    }
  }
  
  // Función para eliminar un nombre del array
  
  function eliminarNombre() {
    var nombreEliminar = document.getElementById("nombreEliminar").value.trim();
    var indexEliminar = nombresNoRepetidos.indexOf(nombreEliminar);
    if (indexEliminar !== -1) {
      // Si el nombre está en la lista no repetida, eliminarlo
      nombresNoRepetidos.splice(indexEliminar, 1);
    }

    // Mover el nombre al array de nombres eliminados
    nombresEliminados.push(nombreEliminar);
    document.getElementById("nombreEliminar").value = "";

    // Actualizar la lista de nombres restantes y salidos
    actualizarListas();
  }
  // Función para actualizar las listas de nombres restantes y salidos
  function actualizarListas() {
    document.getElementById("nombresRestantes").innerHTML = generarListaHTML(nombresNoRepetidos);
    document.getElementById("nombresSalidos").innerHTML = generarListaHTML(nombresSalidos);
  }
  
  // Función para generar una lista HTML a partir de un array de nombres
  function generarListaHTML(arrayNombres) {
    return arrayNombres.map(nombre => `<li>${nombre}</li>`).join('');
  }
  
  // Inicializar las listas al cargar la página
  actualizarListas();
  
  const imagenes = document.querySelectorAll('.animated-image');
  
  // Inicializa un array para almacenar los valores de "alt"
  const altArray = [];
  
  // Itera sobre cada imagen y agrega el valor de "alt" al array
  imagenes.forEach((imagen) => {
    altArray.push({ alt: imagen.alt, src: imagen.src });
  });
  
  function mostrarDescripcionAleatoria() {
    // Obtén un índice aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * altArray.length);
  
    // Obtiene la descripción y la fuente de la imagen aleatoria
    const descripcion = altArray[indiceAleatorio].alt;
    const imagenSrc = altArray[indiceAleatorio].src;
  
    // Actualiza el contenido del div con el id "miDiv"
    document.getElementById('miDiv').innerHTML = '';
  

    // Añade la imagen como un elemento img al div
    const imagenElement = document.createElement('img');
    imagenElement.src = imagenSrc;
    imagenElement.alt = descripcion;
  
  
    setTimeout(function () {
      document.getElementById('miDiv').innerHTML = '';
  
      // Añade la descripción al div
      const descripcionElement = document.createElement('p');
      descripcionElement.textContent = `${descripcion} is your assigned character `;
  
      // Añade la imagen como un elemento img al div
      const imagenElement = document.createElement('img');
      imagenElement.src = imagenSrc;
      imagenElement.alt = descripcion;
  
      // Añade la descripción y la imagen al div
      document.getElementById('miDiv').appendChild(descripcionElement);
      document.getElementById('miDiv').appendChild(imagenElement);
  
      // Detener la animación después de mostrar la descripción y la imagen
      document.getElementById("imagenRotativa").style.animationPlayState = "paused";
    }, 1000);
  
  }

  // Variable para almacenar el sonido actual
let sonidoActual;

// Objeto que contiene funciones de sonido para cada botón
let sonidos = {
  boton1: function () {
    // Reproduce el sonido correspondiente al botón 1
    sonidoActual = new Audio('sounds/sound2.mp3');
    sonidoActual.play();
  },
  // Puedes agregar más funciones de sonido para otros botones aquí
  boton2: function () {
    sonidoActual = new Audio('sounds/sound2.mp3')
    sonidoActual.play();
  },
   btnGenerar: function () {
     sonidoActual = new Audio('sounds/sound1.mp3')
     sonidoActual.play();
   } 
};

// Función para detener el sonido cuando el puntero del mouse sale del botón
function detenerSonido() {
  if (sonidoActual) {
    // Detiene la reproducción y restablece la posición del sonido
    sonidoActual.pause();
    sonidoActual.currentTime = 0;
  }
}

// Asocia las funciones de sonido a los eventos de los botones mediante JavaScript
document.getElementById('boton1').addEventListener('mouseover', sonidos.boton1);
document.getElementById('boton1').addEventListener('mouseout', detenerSonido);

document.getElementById('boton2').addEventListener('mouseover', sonidos.boton2);
document.getElementById('boton2').addEventListener('mouseout', detenerSonido);

document.getElementById('btnGenerar').addEventListener('click', sonidos.btnGenerar);
