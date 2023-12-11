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
  
  animateImages(performance.now());
  
  const nombres = ["Max", "dsd", "sada0", "ads"];
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
    var indexEliminar = nombres.indexOf(nombreEliminar);
  
    if (indexEliminar !== -1) {
        nombres.splice(indexEliminar, 1);
        nombresNoRepetidos = [...nombres]; // Utiliza el operador de propagación para crear una copia
  
        // Eliminar el nombre de la lista de nombres generados
        var indexGenerado = nombresGenerados.indexOf(nombreEliminar);
  
        if (indexGenerado !== -1) {
            nombresGenerados.splice(indexGenerado, 1);
        }
  
        document.getElementById("nombreEliminar").value = "";
  
        // Actualizar la lista de nombres restantes
        actualizarListas();
    }
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
  
    // Añade la descripción al div
    const descripcionElement = document.createElement('p');
    descripcionElement.textContent = `You got assigned this character: ${descripcion}`;
  
  
    // Añade la imagen como un elemento img al div
    const imagenElement = document.createElement('img');
    imagenElement.src = imagenSrc;
    imagenElement.alt = descripcion;
  
  
    setTimeout(function () {
      document.getElementById('miDiv').innerHTML = '';
  
      // Añade la descripción al div
      const descripcionElement = document.createElement('p');
      descripcionElement.textContent = `${descripcion} is your assigned character: `;
  
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