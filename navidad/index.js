const audio = new Audio();
const playlist = [
  'img/navidad1.mp3',
];
let currentSongIndex = 0;
audio.src = playlist[currentSongIndex];

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
