import colors from './colors.js';

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

function onStartBtnClick(e) {
  if (e.target.dataset.action !== 'start') {
    return;
  }

  timerId = setInterval(onColorChange, INTERVAL_DELAY);
  refs.startBtn.disabled = true;
}

function onStopBtnClick(e) {
  if (e.target.dataset.action !== 'stop') {
    return;
  }
  refs.startBtn.disabled = false;
  clearInterval(timerId);
}

function onColorChange() {
  const currentColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.bodyRef.style.backgroundColor = colors[currentColor];
}
