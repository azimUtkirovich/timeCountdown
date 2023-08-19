const setTimer = document.querySelector(".dot"); // set timer btn
setTimer.disabled = false;
const startTimer = document.querySelector(".play"); // start btn
startTimer.disabled = true;
const resetTimer = document.querySelector(".reset"); // reset btn
resetTimer.disabled = true;
const pauseTimer = document.querySelector(".pause"); // pause btn

// open 'set timer' window

const controlBtns = document.querySelector(".controlBtns"); // modal btns
const modal = document.querySelector(".modal"); // modal input
const submitButton = document.querySelector("#submitButton"); // modal submit btn

setTimer.addEventListener("click", () => {
  controlBtns.classList.add("none");
  modal.classList.remove("none");
});

// take input from modal

const inputHours = document.querySelector("#hours");
const inputMinutes = document.querySelector("#minutes");
const inputSeconds = document.querySelector("#seconds");


submitButton.addEventListener("click", () => {
  if (inputMinutes.value > 59 || inputSeconds.value > 59) {
    alert("Invalid input");
    inputHours.value = "";
    inputMinutes.value = "";
    inputSeconds.value = "";
  }
  hours.textContent = inputHours.value.toString().padStart(2, "0");
  minutes.textContent = inputMinutes.value.toString().padStart(2, "0");
  seconds.textContent = inputSeconds.value.toString().padStart(2, "0");
  controlBtns.classList.remove("none");
  modal.classList.add("none");
  inputHours.value = "";
  inputMinutes.value = "";
  inputSeconds.value = "";
  startTimer.disabled = false;
});

// start timer

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const display = document.querySelector(".display"); 
let hoursValue = 0;
let minutesValue = 0;
let secondsValue = 0;
let runTimer;

startTimer.addEventListener("click", () => {
  startTimer.classList.add("hidden");
  pauseTimer.classList.remove("hidden");
  display.classList.add("paused"); // change h2 color

  hoursValue = parseInt(hours.textContent);
  minutesValue = parseInt(minutes.textContent);
  secondsValue = parseInt(seconds.textContent);

  runTimer = setInterval(() => {
    
    secondsValue--;
    if (secondsValue < 0) {
      secondsValue = 59;
      minutesValue--;
      if (minutesValue < 0) {
        minutesValue = 59;
        hoursValue--;
        if (hoursValue < 0) {
          clearInterval(runTimer);
          hoursValue = 0;
          minutesValue = 0;
          secondsValue = 0;
          display.classList.remove("paused");
          pauseTimer.classList.add("hidden");
          startTimer.classList.remove("hidden");
        }
      }
    }
    hours.textContent = hoursValue.toString().padStart(2, "0");
    minutes.textContent = minutesValue.toString().padStart(2, "0");
    seconds.textContent = secondsValue.toString().padStart(2, "0");
  }, 1000);
  startTimer.disabled = true;
  setTimer.disabled = true;
  resetTimer.disabled = false;
});

pauseTimer.addEventListener("click", () => {
  pauseTimer.classList.add("hidden");
  startTimer.classList.remove("hidden");
  display.classList.remove("paused"); // change h2 color
  setTimer.disabled = true;
  startTimer.disabled = false;

  clearInterval(runTimer);
});

// reset timer

resetTimer.addEventListener("click", () => {
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
  pauseTimer.classList.add("hidden");
  startTimer.classList.remove("hidden");
  display.classList.remove("paused");
  setTimer.disabled = false;
  startTimer.disabled = true;
  clearInterval(runTimer);
  resetTimer.disabled = true;
})
