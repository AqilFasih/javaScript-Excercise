let timer;
let stopwatch;
let seconds = 0;
let isTimerRunning = false;
let isStopwatchRunning = false;

function formatTime(sec) {
    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timer = setInterval(() => {
            seconds++;
            document.getElementById("display").innerText = formatTime(seconds);
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById("display").innerText = "00:00:00";
    isTimerRunning = false;
}

function startStopwatch() {
    if (!isStopwatchRunning) {
        isStopwatchRunning = true;
        stopwatch = setInterval(() => {
            seconds++;
            document.getElementById("display").innerText = formatTime(seconds);
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatch);
    isStopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatch);
    seconds = 0;
    document.getElementById("display").innerText = "00:00:00";
    isStopwatchRunning = false;
}