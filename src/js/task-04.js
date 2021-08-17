const counterEL = document.querySelector('#counter');
const value = document.querySelector('#value');
const decr = counterEL.firstElementChild;
const incr = counterEL.lastElementChild;

let counter = 0;

function decrement()  {
    value.textContent = counter -= 1;
}

function increment() {
    value.textContent = counter += 1;
}
decr.addEventListener('click', decrement)
incr.addEventListener('click', increment)
