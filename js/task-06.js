const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);
console.log(dataLength);
function validator(event) {
    if (event.currentTarget.value.length === dataLength) {
        event.currentTarget.classList.add("valid");
        return;
    }
    if (event.currentTarget.value.length !== dataLength) {
        event.currentTarget.classList.add("invalid");
        return;

    }
};
input.addEventListener('change', validator);