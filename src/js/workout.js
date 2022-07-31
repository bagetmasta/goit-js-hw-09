// Решенная 3-я задача с консолями (сдаю дз без консолей)

// import Notiflix from 'notiflix';

// const refs = {
//   form: document.querySelector('.form'),
// };

// let amountOfPromises = 1;
// let position = 1;

// refs.form.addEventListener('submit', onSubmitClick);

// function onSubmitClick(e) {
//   e.preventDefault();

//   const {
//     elements: { amount, delay, step },
//   } = e.currentTarget;

//   let delayForFunction = Number(delay.value);

//   const intervalId = setInterval(() => {
//     if (amountOfPromises > Number(amount.value)) {
//       console.log('Достигли максимального предела');
//       amountOfPromises = 1;
//       position = 1;
//       clearInterval(intervalId);
//       return;
//     }

//     createPromise(position, delayForFunction)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });

//     console.log(`Это ${amountOfPromises} лог внутри setInterval`);

//     amountOfPromises += 1;
//     position += 1;
//     delayForFunction += Number(step.value);
//   });
// }

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         // Fulfill
//         resolve({
//           position: position,
//           delay: delay,
//         });
//       } else {
//         // Reject
//         reject({
//           position: position,
//           delay: delay,
//         });
//       }

//       console.log(`Это ${position} лог внутри setTimeout`);
//     }, delay);
//   });
// }
