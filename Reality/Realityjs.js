/*const nombres = ["Max", "Alicia","Jose","Mercedes","Jander","Yessi","Anzu", "Neimy","Hanna","Isaac", "Juanjo","David","Paolo","Alba", "Joaco","Alberto","Denisse", "Alfredo","Alfredo", "Marcela","Laudy", "Victor","Yady","Alvaro", "Roxana","Elena"];

const btnGenerar = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");

btnGenerar.addEventListener("click",  function (){

    const nombreAleatorio = obtenerNombreAleatorio(nombres);
    resultado.textContent = nombreAleatorio;
});


function obtenerNombreAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
  }




  function renderNames() {
    const nameList = document.getElementById("nameList");
  
    // Limpiar la lista actual
    nameList.innerHTML = "";
  
    // Agregar cada nombre al listado
    nombres.forEach(name => {
      const listItem = document.createElement("li");
      listItem.textContent = name;
      nameList.appendChild(listItem);
    });
  }
  
  // Función para agregar un elemento al array
  function addElement() {
    const addElementInput = document.getElementById("addElementInput");
    const newName = addElementInput.value.trim();
  
    if (newName !== "") {
      nombres.push(newName);
      addElementInput.value = ""; // Limpiar el input después de agregar
      renderNames();
    }
  }
  
  // Función para eliminar un elemento del array
  function removeElement() {
    const removeElementInput = document.getElementById("removeElementInput");
    const nameToRemove = removeElementInput.value.trim();
  
    if (nameToRemove !== "") {
      const index = nombres.indexOf(nameToRemove);
      
      if (index !== -1) {
        nombres.splice(index, 1);
        removeElementInput.value = ""; // Limpiar el input después de eliminar
        renderNames();
      } else {
        alert("El nombre no existe en la lista.");
      }
    }
  }
  
  // Mostrar la lista inicial al cargar la página
  renderNames();
  */

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

// Llamar a la función de animación al cargar la página
animateImages(performance.now());

// Función para detener o reanudar el carrusel
function toggleCarousel() {
  if (isCarouselRunning) {
    cancelAnimationFrame(animationFrameId);
  } else {
    animateImages(performance.now());
  }
  isCarouselRunning = !isCarouselRunning;
}


/////////////ARRAY NOMBRES/////////////////////
const nombres = ["Max", "Alicia", "Jose", "Mercedes", "Jander", "Yessi", "Anzu", "Neimy", "Hanna", "Isaac", "Juanjo", "David", "Paolo", "Alba", "Joaco", "Alberto", "Denisse", "Alfredo", "Alfredo", "Marcela", "Laudy", "Victor", "Yady", "Alvaro", "Roxana", "Elena"];

const btnGenerar = document.getElementById("btnGenerar");
const resultado = document.getElementById("resultado");


btnGenerar.addEventListener("click", function () {

  const nombreAleatorio = obtenerNombreAleatorio(nombres);
  resultado.textContent = nombreAleatorio;
});


function obtenerNombreAleatorio(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}




function renderNames() {
  const nameList = document.getElementById("nameList");

  // Limpiar la lista actual
  nameList.innerHTML = "";

  // Agregar cada nombre al listado
  nombres.forEach(name => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    nameList.appendChild(listItem);
  });
}

// Función para agregar un elemento al array
function addElement() {
  const addElementInput = document.getElementById("addElementInput");
  const newName = addElementInput.value.trim();

  if (newName !== "") {
    nombres.push(newName);
    addElementInput.value = ""; // Limpiar el input después de agregar
    renderNames();
  }
}

// Función para eliminar un elemento del array
function removeElement() {
  const removeElementInput = document.getElementById("removeElementInput");
  const nameToRemove = removeElementInput.value.trim();

  if (nameToRemove !== "") {
    const index = nombres.indexOf(nameToRemove);

    if (index !== -1) {
      nombres.splice(index, 1);
      removeElementInput.value = ""; // Limpiar el input después de eliminar
      renderNames();
    } else {
      alert("El nombre no existe en la lista.");
    }
  }
}

// Mostrar la lista inicial al cargar la página
renderNames();






const imagenes = document.querySelectorAll('.animated-image');
const altArray = [];

imagenes.forEach((imagen) => {
  altArray.push({ alt: imagen.alt, src: imagen.src });
});

function mostrarDescripcionAleatoria() {

  const indiceAleatorio = Math.floor(Math.random() * altArray.length);

  // Obtiene la descripción y la fuente de la imagen aleatoria
  const descripcion = altArray[indiceAleatorio].alt;
  const imagenSrc = altArray[indiceAleatorio].src;

  // Actualiza el contenido del div con el id "miDiv"
  document.getElementById('miDiv').innerHTML = '';

  // Añade la descripción al div
  const descripcionElement = document.createElement('p');
  descripcionElement.textContent = `You got assigned this character: ${descripcion}`;
  document.getElementById('miDiv').appendChild(descripcionElement);

  // Añade la imagen como un elemento img al div
  const imagenElement = document.createElement('img');
  imagenElement.src = imagenSrc;
  imagenElement.alt = descripcion;
  document.getElementById('miDiv').appendChild(imagenElement);
}


///////ROTACION IMAGEN////////////
let rotacionPausada = false;

function toggleRotacion() {
  const imagen = document.getElementById('imagenRotativa');
  const btnToggle = document.getElementById('btnGenerar');

  if (rotacionPausada) {
    imagen.style.animationPlayState = 'running';
    //btnToggle.textContent = 'Pausar Rotación';
  } else {
    imagen.style.animationPlayState = 'paused';
    //btnToggle.textContent = 'Reanudar Rotación';
  }

  rotacionPausada = !rotacionPausada;
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
    sonidoActual = new Audio('sounds/sound1.mp3')
    sonidoActual.play();
  }
  /*  btnGenerar: function () {
     sonidoActual = new Audio('sounds/sound3.mp3')
     sonidoActual.play();
   } */
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

/* document.getElementById('btnGenerar').addEventListener('mouseover', sonidos.btnGenerar);
document.getElementById('btnGenerar').addEventListener('mouseout', detenerSonido); */

