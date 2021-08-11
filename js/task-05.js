const inputEl = document.querySelector('#name-input');
const spanEL = document.querySelector('#name-output');

function newName(name) {
    spanEL.textContent = name.currentTarget.value.trim() || "незнакомец";
}
inputEl.addEventListener('input', newName);

