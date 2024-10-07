/*1. Exercici01.html
Crea un document HTML amb un div amb id “llista_propietats”. Programa amb JS que es creï una
llista amb els següents missatges i amb els valors obtinguts dinàmicament:*/
//a. Valor mínim que pot tenir un número JS
//b. Amplada total de la pantalla
//c. Amplada interna de la finestra
//d. Títol de la web
//e. Hora actual 
mostraLlista();
window.setInterval(mostraLlista, 1000);//va sense parentesis perque es un objecte executable
function mostraLlista() {
    let llista = document.getElementById("llista_propietats");
    let data = new Date();
    llista.innerHTML = `<ol>
                    <li>Valor mínim que pot tenir un número JS: `+ Number.MIN_VALUE + `</li>
                    <li>Amplada total de la pantalla: `+ screen.width + `</li>
                    <li>Amplada interna de la finestra: `+ window.innerWidth + `</li>
                    <li>Títol de la web: `+ document.title + `</li>
                    <li>Hora actual: `+ data.getDate()
        + `/` + data.getMonth()
        + `/` + data.getFullYear()
        + ` - ` + data.getHours()
        + `:` + data.getMinutes()
        + `:` + data.getSeconds() + `</li>
                    </ol>`;
}

/* 2. Crea una interface amb HTML per permetre seleccionar , reproduir i pausar un àudio
a. Permet escollir entre diferents àudios*/
let audio = document.getElementById("audio1");
audio.addEventListener("canplaythrough", function (params) {
    timer.max = audio.duration;
    timer_span.max = audio.duration;
    let ref_interval = window.setInterval(function () {
        timer.value = audio.currentTime;
        timer_span.innerText = audio.currentTime;
        if (audio.currentTime == audio.duration) {
            window.clearInterval(ref_interval);
        }
    }, 1000);
});
let timer = document.getElementById("timer");
let timer_span = document.getElementById("timer_span");

function playAudio() {
    let song = document.getElementById("sl");
    audio.src = song.value;
    audio.play();
}
function changeTime() {
    audio.currentTime = document.getElementById("timer").value;
}
function pauseAudio() {
    audio.pause();
}
function playStop() {
    audio.pause();
    audio.currentTime = 0;
}
function playMute() {
    audio.muted = !audio.muted;
}
function volUp() {
    try {
        audio.volume += 0.2;

    } catch (error) {
        audio.volume = 1;
    }
    document.getElementById("vol").value = audio.volume;
    //if (audio.volume>1){ audio.volume=1;}
}
function volDown() {
    try {
        audio.volume -= 0.2;
    } catch (error) {
        audio.volume = 0;
    }
    document.getElementById("vol").value = audio.volume;
}
function changeVol() {
    audio.volume = document.getElementById("vol").value;
}
window.setTimeout(//executa passat X temps
    function () {
        document.getElementById("timer_span").innerText = audio.duration;
    }, 500
);