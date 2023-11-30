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
  const nombres = ["Max", "Alicia","Jose","Mercedes","Jander","Yessi","Anzu", "Neimy","Hanna","Isaac", "Juanjo","David","Paolo","Alba", "Joaco","Alberto","Denisse", "Alfredo","Alfredo", "Marcela","Laudy", "Victor","Yady","Alvaro", "Roxana","Elena"];

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