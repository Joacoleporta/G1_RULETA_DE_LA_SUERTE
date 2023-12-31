var c = document.getElementById("c");
var ctx = c.getContext("2d");

// Función para inicializar el tamaño del canvas
function initializeCanvasSize() {
    c.height = window.innerHeight;
    c.width = window.innerWidth;
}

// Inicializa el tamaño del canvas al cargar la página
initializeCanvasSize();

// Actualiza el tamaño del canvas cuando cambia el tamaño de la ventana
window.addEventListener('resize', function () {
    initializeCanvasSize();
});

//chinese characters - taken from the unicode charset
var matrix = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#27FF00";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);

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
