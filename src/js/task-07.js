const inputEL = document.querySelector('#font-size-control');
const text = document.querySelector('#text')
function textSize(event) {
    const currentFontSize = event.currentTarget.value;
    text.style.fontSize = `${currentFontSize*2}%`;

};

inputEL.addEventListener('input', textSize);