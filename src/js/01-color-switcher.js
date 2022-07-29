const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);
refs.stopButton.setAttribute('disabled', true);

function onStartButtonClick() {
  refs.startButton.setAttribute('disabled', true);
  refs.stopButton.removeAttribute('disabled', true);

  chahgeBgColor();

  timerId = setInterval(() => {
    chahgeBgColor();
  }, 1000);
}

function onStopButtonClick() {
  refs.startButton.removeAttribute('disabled', false);
  refs.stopButton.setAttribute('disabled', true);
  clearInterval(timerId);
}

function chahgeBgColor() {
  const bodyColor = getRandomHexColor();
  refs.body.style.backgroundColor = bodyColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
