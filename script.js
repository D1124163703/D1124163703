let score = 0;
let time = 30;
let current = -1;
let timer;
let gameInterval;

function startGame() {
    score = 0;
    time = 30;
    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = time;

    gameInterval = setInterval(showMole, 800);
    timer = setInterval(countDown, 1000);
}

function showMole() {
    let holes = document.getElementsByClassName("hole");

    for (let i = 0; i < holes.length; i++) {
        holes[i].classList.remove("mole");
    }

    current = Math.floor(Math.random() * holes.length);
    holes[current].classList.add("mole");
}

function hit(index) {
    if (index === current) {
        score++;
        document.getElementById("score").innerText = score;
        current = -1;
    }
}

function countDown() {
    time--;
    document.getElementById("time").innerText = time;

    if (time <= 0) {
        clearInterval(timer);
        clearInterval(gameInterval);
        alert("遊戲結束！你的分數是：" + score);
    }
}
