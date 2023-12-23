// Obtener los elementos HTML que deseas controlar
var botonComenzar = document.getElementById("star");
var velocidadControl = document.getElementById("velocidad");
var variacionLista = document.getElementById("Variacion");
var imagen1 = document.getElementsByClassName("ball-yellow1")[0];
var imagen2 = document.getElementsByClassName("ball-green1")[0];
var imagen3 = document.getElementsByClassName("ball-blue1")[0];
var imagen4 = document.getElementsByClassName("ball-red1")[0];
var imagen5 = document.getElementsByClassName("ball-blue2")[0];
var imagen6 = document.getElementsByClassName("ball-green2")[0];
var imagen7 = document.getElementsByClassName("ball-yellow2")[0];
var imagen8 = document.getElementsByClassName("ball-red2")[0];

// Variable para controlar el estado de reproducción
let reproduciendo = false;

// Agregar un controlador de eventos al botón "Comenzar"
botonComenzar.addEventListener("click", function() {
  if (!reproduciendo) {
    alert("¡Hola! Has hecho clic en el botón Comenzar. Reproduciendo Musica.");
    // Reproducir música (reemplaza la URL con la ruta de tu archivo de audio)
    const audio = new Audio("img/lucesitas.mp3");
    audio.play();
    reproduciendo = true;
  } else {
    // Detener la reproducción
    audio.pause();
    audio.currentTime = 0;
    reproduciendo = false;
  }
});
// Controlar la velocidad de la luz
velocidadControl.addEventListener("input", function() {
  var velocidad = velocidadControl.value;
  imagen1.style.animationDuration = velocidad + "s";
  imagen2.style.animationDuration = velocidad + "s";
  imagen3.style.animationDuration = velocidad + "s";
  imagen4.style.animationDuration = velocidad + "s";
  imagen5.style.animationDuration = velocidad + "s";
  imagen6.style.animationDuration = velocidad + "s";
  imagen7.style.animationDuration = velocidad + "s";
  imagen8.style.animationDuration = velocidad + "s";
});


// Agregar efectos de brillo y patrones
setInterval(function() {
  if (variacionLista.value == 1) {
    if (imagen1.style.opacity == 1) {
      imagen1.style.opacity = 0.5;
    } else {
      imagen1.style.opacity = 1;
    }
  } else if (variacionLista.value == 2) {
    if (imagen2.style.opacity == 1) {
      imagen2.style.opacity = 0.5;
    } else {
      imagen2.style.opacity = 1;
    }
  } else if (variacionLista.value == 3) {
    if (imagen3.style.opacity == 1) {
      imagen3.style.opacity = 0.5;
    } else {
      imagen3.style.opacity = 1;
    }
  }
}, 500);

setInterval(function() {
  if (variacionLista.value == 1) {
    if (imagen4.style.opacity == 1) {
      imagen4.style.opacity = 0.5;
    } else {
      imagen4.style.opacity = 1;
    }
  } else if (variacionLista.value == 2) {
    if (imagen5.style.opacity == 1) {
      imagen5.style.opacity = 0.5;
    } else {
      imagen5.style.opacity = 1;
    }
  } else if (variacionLista.value == 3) {
    if (imagen6.style.opacity == 1) {
      imagen6.style.opacity = 0.5;
    } else {
      imagen6.style.opacity = 1;
    }
  }
}, 1000);

setInterval(function() {
  if (variacionLista.value == 1) {
    if (imagen7.style.opacity == 1) {
      imagen7.style.opacity = 0.5;
    } else {
      imagen7.style.opacity = 1;
    }
  } else if (variacionLista.value == 2) {
    if (imagen8.style.opacity == 1) {
      imagen8.style.opacity = 0.5;
    } else {
      imagen8.style.opacity = 1;
    }
  } else if (variacionLista.value == 3) {
    if (imagen1.style.opacity == 1) {
      imagen1.style.opacity = 0.5;
    } else {
      imagen1.style.opacity = 1;
    }
  }
}, 1500);// Apagar todas las luces
imagen1.style.opacity = 0;
imagen2.style.opacity = 0;
imagen3.style.opacity = 0;
imagen4.style.opacity = 0;
imagen5.style.opacity = 0;
imagen6.style.opacity = 0;
imagen7.style.opacity = 0;
imagen8.style.opacity = 0;

// Hacer que brillen todas juntas
setTimeout(() => {
  imagen1.style.opacity = 1;
  imagen2.style.opacity = 1;
  imagen3.style.opacity = 1;
  imagen4.style.opacity = 1;
  imagen5.style.opacity = 1;
  imagen6.style.opacity = 1;
  imagen7.style.opacity = 1;
  imagen8.style.opacity = 1;
}, 2000);
function showMessage(regalo) {
  // Array de mensajes para los regalos
  const mensajes = [
      '¡Felices fiestas! 🎁',
      '¡Disfruta de la temporada navideña! 🎄',
      'Que tengas un próspero año nuevo 🎉',
        '¡Disfruta de la temporada navideña! 🎄',
        'Que tengas un próspero año nuevo 🎉',
        'Paz y amor para todos 🕊️',
        'Que la magia de la Navidad llene tu corazón de alegría ✨',
        'Deseándote momentos cálidos y llenos de luz en esta Navidad 🌟',
        'Que los sueños se hagan realidad en esta época mágica 🌠',
        'Brindemos por la felicidad y la esperanza en el nuevo año 🥂'
  ];

  // Selecciona un mensaje aleatorio
  const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];

  alert(mensajeAleatorio);

  // Lógica para mostrar confeti
  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.animationDuration = Math.random() * 3 + 1 + 's';
      regalo.appendChild(confetti);
      setTimeout(() => {
          regalo.removeChild(confetti);
      }, 2000);
  }
}

