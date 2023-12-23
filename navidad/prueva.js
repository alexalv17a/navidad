var miVideo = document.getElementById("miVideo");

miVideo.addEventListener('loadedmetadata', function() {
  if (miVideo.requestFullscreen) {
    miVideo.requestFullscreen();
  } else if (miVideo.webkitRequestFullscreen) { /* Safari */
    miVideo.webkitRequestFullscreen();
  } else if (miVideo.msRequestFullscreen) { /* IE11 */
    miVideo.msRequestFullscreen();
  }
});
var text = "A lo largo del año, hemos tenido la oportunidad de conocer a personas \n maravillosas que han sido parte de nuestras vidas, ya sea por un largo o corto tiempo.\nHa sido una experiencia maravillosa conocer a estas personas, \n hacer nuevos amigos y vivir nuevas experiencias.\n Las locuras de cada uno de ellos han sido gratas de conocer\n y estamos totalmente agradecidos y felices de haberlos conocido \nEsperamos que el próximo año nos brinde la oportunidad de seguir conociendo a más personas maravillosas y vivir nuevas experiencias.\nEn esta época del año, es importante recordar lo afortunados que somos de tener amigos  \n y personas especiales en nuestras vidas. Estamos agradecidos por su presencia y apoyo, \ny esperamos que esta temporada les traiga mucha felicidad y alegría.\n Que la temporada les brinde momentos inolvidables con sus seres queridos, \n y que el nuevo año les traiga muchas bendiciones y oportunidades para crecer y prosperar.\n Esperamos que el próximo año sea un año lleno de éxitos y logros,\n  y que podamos seguir contando con su amistad y apoyo.\n¡Que tengas un excelente fin de año y un próspero Año Nuevo! 🎉🎊\n ";
var container = document.getElementById("text-container");
var lines = text.split("\n");
var lineIndex = 0;
var index = 0;

function updateText() {
  container.innerHTML = lines[lineIndex].substring(0, index);
  index++;

  if (index > lines[lineIndex].length) {
    lineIndex++;
    index = 0;

    if (lineIndex >= lines.length) {
      lineIndex = 0;
    }
  }

  setTimeout(updateText, 100);
}

updateText();
const audio = new Audio();
const playlist = [
  'img/navidad2.mp3',
];
let currentSongIndex = 0;
audio.src = playlist[currentSongIndex];
audio.loop = true;
audio.autoplay = true;

const playButton = document.getElementById('play');
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fa fa-play"></i>';
  }
});

const volumeSlider = document.getElementById('volume');
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value / 100;
});

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  audio.src = playlist[currentSongIndex];
  audio.play();
});

const previousButton = document.getElementById('previous');
previousButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  audio.src = playlist[currentSongIndex];
  audio.play();
});

audio.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  audio.src = playlist[currentSongIndex];
  audio.play();
});
