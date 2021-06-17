const board = document.querySelector('#board');
const SQUARES_NUMBER = 400;
const colors = ['#FF6A28', '#FE2F57', '#7367F0', '#CE9FFC', '#00E7F7', '#00C2F1'];

const setColor = (e) => {
    const el = e.target;
    const color = getRandomColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = (e) => {
    const el = e.target;
    el.style.background = 'transparent';
    el.style.boxShadow = 'none';
}

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);
    
    board.append(square);
}