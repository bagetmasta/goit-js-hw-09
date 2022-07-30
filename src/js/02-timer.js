// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
// Библиотека Notiflix
import Notiflix from 'notiflix';

const refs = {
  startButton: document.querySelector('button[data-start]'),
  inputText: document.querySelector('input#datetime-picker'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
  timeOfSelectedDate: null,
  currentTime: null,
  isActive: false,
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    refs.timeOfSelectedDate = selectedDates[0].getTime();
    refs.currentTime = Date.now();

    if (refs.timeOfSelectedDate - refs.currentTime < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startButton.removeAttribute('disabled', true);
    }
  },
};

refs.startButton.setAttribute('disabled', true);

refs.inputText.addEventListener('focus', onInputTextFocus);
refs.startButton.addEventListener('click', onStartButtonClick);

function onInputTextFocus() {
  flatpickr(refs.inputText, options);
}

function onStartButtonClick() {
  if (!refs.isActive) {
    refs.isActive = true;
    timerStart();

    setInterval(() => {
      timerStart();
    }, 1000);
  }
}

function timerStart() {
  const everySecTime = Date.now();
  const timeLeft = refs.timeOfSelectedDate - everySecTime;

  if (timeLeft > 0) {
    const time = convertMs(timeLeft);

    updateClockFace(time);
  }
}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.daysValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minutesValue.textContent = `${minutes}`;
  refs.secondsValue.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
