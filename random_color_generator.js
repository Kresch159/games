//Random Color Generator
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function randomColorGenerator() {
    document.body.style.background = getRandomColor();
}
