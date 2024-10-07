let countdownInterval;
let minutes = 0;
let seconds = 0;

// Get HTML elements
const countdownDisplay = document.getElementById('count');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const minutesInput = document.getElementById('min');
const secondsInput = document.getElementById('sec');

// Set initial countdown display
countdownDisplay.textContent = `00:${seconds.toString().padStart(2, '0')}`;

// Add event listeners
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
    // Add music playing logic here
    console.log('Countdown reached 0! Music playing...');
}
/* ------------------------------------------------------ */
let clockInterval;
let alarmTime;
let alarmSound;
let alarmVolume;

// Get HTML elements
const clockDisplay = document.getElementById('clock-display');
const setAlarmButton = document.getElementById('set-alarm-button');
const alarmSoundSelect = document.getElementById('alarm-sound-select');
const alarmVolumeInput = document.getElementById('alarm-volume-input');
const playAlarmButton = document.getElementById('play-alarm-button');
const stopAlarmButton = document.getElementById('stop-alarm-button');

// Set initial clock display
clockDisplay.textContent = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}:${new Date().getSeconds().toString().padStart(2, '0')}`;

// Update clock display every second
clockInterval = setInterval(updateClock, 1000);

// Function to update clock display
function updateClock() {
    const currentTime = new Date();
    clockDisplay.textContent = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`;
}

// Add event listeners
setAlarmButton.addEventListener('click', setAlarm);
playAlarmButton.addEventListener('click', playAlarm);
stopAlarmButton.addEventListener('click', stopAlarm);

// Function to set alarm
function setAlarm() {
    alarmTime = new Date();
    alarmTime.setHours(parseInt(prompt("Enter hour:")));
    alarmTime.setMinutes(parseInt(prompt("Enter minute:")));
    alarmTime.setSeconds(0);
    alarmSound = alarmSoundSelect.value;
    alarmVolume = alarmVolumeInput.value;
}

// Function to play alarm
function playAlarm() {
    // Play music using the selected sound and volume
    console.log(`Playing alarm sound ${alarmSound} at volume ${alarmVolume}`);
}

// Function to stop alarm
function stopAlarm() {
    // Stop music
    console.log("Stopping alarm");
}