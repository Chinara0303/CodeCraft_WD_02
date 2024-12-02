let timer;
let seconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapsList = document.getElementById("laps-list");

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(seconds);
}

startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
});

resetButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
  seconds = 0;
  updateDisplay();
  lapsList.innerHTML = "";
});

timeDisplay.addEventListener("click", () => {
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap: ${formatTime(seconds)}`;
  lapsList.appendChild(lapItem);
});
