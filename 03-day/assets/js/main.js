let audioPlay = document.getElementById("audio-container");
let btnPlay = document.getElementById("btn-play");
let btnPuse = document.getElementById("btn-pause");


btnPlay.addEventListener("click", () => {
    audioPlay.play();
});
btnPuse.addEventListener("click", () => {
    audioPlay.pause();
});