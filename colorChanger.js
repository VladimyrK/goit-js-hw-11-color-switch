const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const body = document.querySelector('body');
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

let intervalId = null;
let isStarted = false;

function colorChanger() {
  if (!isStarted) {
    isStarted = true;
    intervalId = setInterval(() => {
      let random = randomIntegerFromInterval(1, 6);
      body.style.backgroundColor = colors[random];
    }, 1000);
  } else {
    console.log('allready started');
    return;
  }
}

btnStart.addEventListener('click', colorChanger);
btnStop.addEventListener('click', () => {
  clearInterval(intervalId);
  isStarted = false;
  console.log('stoped');
});
