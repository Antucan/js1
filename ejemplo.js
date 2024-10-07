console.log("Hola!");//mostrar missatge per consola
let div = document.getElementById("div_text");
div.innerHTML = "Hello there! <h1> HTML </h1>";//atribut per modificar el div
div.innerText += "Hello there! <h1> HTML </h1>";//Ignora el tag

//alert("Popupfeo alert");
/*let numero = window.prompt("Indica un numero payaso:");
let resultat = document.getElementById("div_numero");
resultat.innerText = numero;*/

let input_numero1 = document.getElementById("input_numero1");//devuelve el input
let numero1 = input_numero1.value;
let input_numero2 = document.getElementById("input_numero2");//devuelve el input
let numero2 = input_numero2.value;

let resultat = document.getElementById("div_numero");
//resultat.innerText = numero;

function sumaValors() {
    let num1 = input_numero1.value;
    let num2 = document.getElementById("input_numero2").value;
    if (isNaN(num1) || isNaN(num2)) {
        num1 = 0;
        num2 = 0;
    }
    resultat.innerText = parseFloat(num1) + parseFloat(num2);
}
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

function playAudio1() {
    audio.play();
}
function changeTime() {
    audio.currentTime = document.getElementById("timer").value;
}
function playAudio2() {
    audio.src = "DRUMC0.WAV";
    audio.play();
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

/*-----------------------------*/

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

