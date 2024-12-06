// const startRef = document.querySelector('.js-start');
// const stopRef = document.querySelector('.js-stop');
// const clearRef = document.querySelector('.js-clear');
// const listRef = document.querySelector('.list');

// let fnId;
// const murkup = `
// <li class="item">Hallo Js !!!</li>
// `;

// startRef.addEventListener("click", () => {
//   fnId = setInterval(() => {
//     listRef.insertAdjacentHTML("afterbegin", murkup);
//   }, 1000);
// });

// stopRef.addEventListener("click", () => {
//   clearInterval(fnId);
// });

// clearRef.addEventListener("click", () => {
//   // listRef.innerHTML = ``;
//   listRef.remove();
// });

// ******************************
//   Date

const date = new Date('2025-01-25T14:25');
console.log(date.getTime());

console.log(new Date(0));

const time = Date.now();
console.log(time);


const startTime = Date.now();

for (let i = 0; i < 100; i += 1) {
  console.log(i);
}

const endTime = Date.now();

const difference = endTime - startTime;
console.log('difference = ' + difference);

