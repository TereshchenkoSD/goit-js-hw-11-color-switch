const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const INTERVAL_DELAY = 1000;

const refs = {
  bodyRef: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  timerId = setInterval(() => {
    colors.forEach(color => {
      refs.bodyRef.style.backgroundColor = color;
    });
  }, INTERVAL_DELAY);
}

function onStopBtnClick() {
  clearInterval(timerId);
  console.log('остановили случайный подбор цвета');
}
