/*
3. 2p] Crea un document HTML amb un div amb id “taula_propietats”. Programa amb JS que es creï
una taula formada per dos columnes. En la primera columna has de mostrar els texts indicats a
continuació, i en la segona columna els valors corresponents obtinguts dinàmicament amb JS:
a. Valor máxim que pot tenir un número JS
b. Altura total de la pantalla
c. Altura interna de la finestra
d. URL de la web
*/
showTable();
window.setInterval(showTable, 1000);
function showTable() {
    let llista = document.getElementById("taula_propietats");
    let data = new Date();
    llista.innerHTML = `<table border=1px><tr><td>Valor màxim que pot tenir un número JS: </td><td>` +
        Number.MAX_VALUE + `</td></tr>
                        <tr><td>Altura total de la pantalla: </td><td>`+
        screen.height + `</td></tr>
                        <tr><td>Altura interna de la finestra: </td><td>`+
        window.innerHeight + `</td></tr>
                        <tr><td>URL de la web: </td><td>`+
        document.URL + `</td></tr>
                        </table>`;
}
/*
4. 3p] Afegeix al document HTML un compte enrere inicialment a 00minuts i 00segons
a. Permet que l’usuari pugui establir quants minuts i segons vol que duri.
b. Permet que l’usuari inicií el compte enrere i el pugui aturar (restablint-lo a 0) i pausar
c. Quan el compte enrere arribi a 0, avisa amb una música i permet que es pugui aturar.
*/
let countdownInterval;
let minutes = 0;
let seconds = 0;
let audio = new Audio('DRUMC0.WAV');
// Guardo los elementos HTML en variables
const countdownDisplay = document.getElementById('count');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const minutesInput = document.getElementById('min');
const secondsInput = document.getElementById('sec');

// Pongo la variable a 0
countdownDisplay.textContent = `00:${seconds.toString().padStart(2, '0')}`;

// Añado eventos por cada boton
startButton.addEventListener('click', startCountdown);
pauseButton.addEventListener('click', pauseCountdown);
resetButton.addEventListener('click', resetCountdown);

// Function to start countdown
function startCountdown() {
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);
    if (seconds < 60) {
        countdownInterval = setInterval(countdown, 1000);
    }
}

// Function to pause countdown
function pauseCountdown() {
    clearInterval(countdownInterval);
}

// Function to reset countdown
function resetCountdown() {
    minutes = 0;
    seconds = 0;
    countdownDisplay.textContent = `00:${seconds.toString().padStart(2, '0')}`;
    clearInterval(countdownInterval);
}

// Function to update countdown display
function countdown() {
    seconds--;
    if (seconds < 0) {
        minutes--;
        seconds = 59;
    }
    if (minutes < 0) {
        minutes = 0;
        seconds = 0;
        // Play music when countdown reaches 0
        playMusic();
    }
    countdownDisplay.textContent = `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to play music
function playMusic() {
    audio.play();
    console.log('Countdown reached 0! Music playing...');
}
/*
5. 5p] Afegeix un rellotge que mostri la hora, minuts i segons actuals i s’actualitzi cada segon.
a. Afegeix la possibilitat d’establir una alarma que avisi en una hora en concret
b. Al saltar l’alarma aconsegueix que soni una música i que es pugui aturar
c. L’usuari pot escollir entre diferents músiques
d. L’usuari pot establir el volum
e. En qualsevol moment l’usuari pot reproduir i aturar la música de l’alarmas
*/
// Get HTML elements
const clockDisplay = document.getElementById('clock');
const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minute');
const setAlarmButton = document.getElementById('setAlarm');
const alarmSoundSelect = document.getElementById('soundSelect');
const alarmVolumeInput = document.getElementById('volume');
const playAlarmButton = document.getElementById('playAlarm');
const stopAlarmButton = document.getElementById('stopAlarm');

let clockInterval;
let alarmTime;
let alarmSound = new Audio();
let selectedSound;
let alarmVolume;

alarmSoundSelect.addEventListener('change', function () {
    selectedSound = alarmSoundSelect.value;
});
// Set initial clock display
clockDisplay.textContent = new Date().toLocaleTimeString();

// Update clock display every second
clockInterval = setInterval(updateClock, 1000);

// Function to update clock display
function updateClock() {
    const currentTime = new Date();
    clockDisplay.textContent = new Date().toLocaleTimeString();
}

// Add event listeners
setAlarmButton.addEventListener('click', setAlarm);
playAlarmButton.addEventListener('click', playAlarm);
stopAlarmButton.addEventListener('click', stopAlarm);

// Function to set alarm
function setAlarm() {
    alarmTime = new Date();
    alarmTime.setHours(hourInput.value);
    alarmTime.setMinutes(minuteInput.value);
    alarmTime.setSeconds(0);
    alarmSound.src = alarmSoundSelect.value;
    alarmVolume = alarmVolumeInput.value;
    checkAlarm();
}

//Function to check alarm
function checkAlarm() {
    setInterval(function (params) {
        const currentTime = new Date();
        if (currentTime.getHours() == alarmTime.getHours()
            && currentTime.getMinutes() == alarmTime.getMinutes()
            && currentTime.getSeconds() == alarmTime.getSeconds()) {
            playAlarm();
        }
    })
}

let AlarmPlaying = false;

// Function to play alarm
function playAlarm() {
    if (!AlarmPlaying) {
        if (!alarmSound.src) {
            alarmSound.src = alarmSoundSelect.value;
        } else {
            alarmSound.play();
            alarmVolume = alarmVolumeInput.value;
            alarmSound.volume = parseFloat(alarmVolume) / 100;
            AlarmPlaying = true;
            console.log(`Playing alarm sound ${alarmSoundSelect.value} at volume ${alarmVolume}`);
        }
    }
}

// Function to stop alarm
function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    AlarmPlaying = false;
    console.log("Stopping alarm");
}