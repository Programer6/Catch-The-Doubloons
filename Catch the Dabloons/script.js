const screens = document.querySelectorAll('.screen');
const choose_coin_btns = document.querySelectorAll('.choose-coin-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');
let seconds = 0;
let score = 0;
let selected_coin = {};

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_coin_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_coin = { src, alt };
        screens[1].classList.add('up');
        setTimeout(createCoin, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    const { x, y } = getRandomLocation();
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
    coin.innerHTML = `<img src="${selected_coin.src}" alt="${selected_coin.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;

    coin.addEventListener('click', catchCoin);

    game_container.appendChild(coin);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

function catchCoin() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
    addCoins();
}

function addCoins() {
    setTimeout(createCoin, 1000);
    setTimeout(createCoin, 1500);
}

function increaseScore() {
    score++;
    if (score > 19) {
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}
