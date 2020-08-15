const timer = document.querySelector(".timer");

function setTime () {
    loadedTime = new Date();
    paintTime();
}

function paintTime() {
    const hour = loadedTime.getHours();
    const minute = loadedTime.getMinutes();
    const second = loadedTime.getSeconds();
    timer.innerText = `${pad(hour)}:${pad(minute)}:${pad(second)}`;
}

function pad(timeNumber) {
    return String(timeNumber).padStart(2, '0');
}

function refreshTime() {
    setInterval(setTime, 1000);
}

function init() {
    setTime();
    refreshTime();
}

init();