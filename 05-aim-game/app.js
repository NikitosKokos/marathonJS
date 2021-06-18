const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const restartBtn = document.querySelector('#restart');
const colors = ['#242240', '#2E3F7F', '#2300B0', '#5199FF', '#0260E8', '#0351C1', '#052555', '#4A69FF', '#1771F1', '#0043A4'];
let time = 0;
let score = 0;
let timer;

const setTime = (value) => {
    if(value > 59){
        let minutes = Math.floor(value / 60);
        const seconds = value - minutes * 60;
        if(minutes < 10){
            minutes = `0${minutes}`
        }
        timeEl.innerHTML = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }else{
        timeEl.innerHTML = `00:${value}`;
    }
}

const finishGame = () => {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Cчет: <span class='primary'>${score}</span></h1>`;
    restartBtn.classList.add('show');
}

const decreaseTime = () => {
    if(time === 0){
        finishGame();
    }else{
        let current = --time;
        if(current < 10){
            current = `0${current}`
        }
        setTime(current);
    }
}

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const createRondomCircle = () => {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(size, width - size);
    const y = getRandomNumber(size, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = colors[getRandomNumber(0, colors.length - 1)];
    board.append(circle);
}

const startGame = () => {
    timer = setInterval(decreaseTime, 1000);
    createRondomCircle();
    setTime(time);
}

const restartGame = () => {
    time = 0;
    score = 0;
    screens.forEach(screen => screen.classList.remove('up'));
    board.innerHTML = '';
    timeEl.parentNode.classList.remove('hide');
    restartBtn.classList.remove('show');
    clearInterval(timer);
}

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
    if(e.target.classList.contains('time-btn')){
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')){
        score++;
        e.target.remove();
        createRondomCircle();
    }
});

restartBtn.addEventListener('click', restartGame);
