const div = document.querySelector('#counter');
const el = document.querySelector('#value');
const decr = div.firstElementChild;
const incr = div.lastElementChild;

let counter = 0;

function decrement()  {
    el.textContent = counter -= 1;
}

function increment() {
    el.textContent = counter += 1;
}
decr.addEventListener('click', decrement)
incr.addEventListener('click', increment)
