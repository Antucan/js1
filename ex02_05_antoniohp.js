let clockInterval;
let alarmTime;
let alarmSound;
let alarmVolume;

// Get HTML elements
const clockDisplay = document.getElementById('clock');
const setAlarmButton = document.getElementById('setAlarm');
const alarmSoundSelect = document.getElementById('soundSelect');
const alarmVolumeInput = document.getElementById('volume');
const playAlarmButton = document.getElementById('playAlarm');
const stopAlarmButton = document.getElementById('stopAlarm');

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
    alarmSound.play();
    console.log(`Playing alarm sound ${alarmSound} at volume ${alarmVolume}`);
}

// Function to stop alarm
function stopAlarm() {
    alarmSound.stop();
    console.log("Stopping alarm");
}