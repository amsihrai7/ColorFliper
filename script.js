
const $colorBtn = document.querySelector('.colorBtn');
const background = document.querySelector('body');

const colors = ['green', 'greenyellow', 'rgb(25,245,150)', '#5afaca', '#2eb82e', '#00b33c', 'bfff00'];

$colorBtn.addEventListener('click',changeColor);

function changeColor() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    background.style.backgroundColor = colors[randomNumber];
};





































