const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
const gameOverMessage = document.getElementById("game-over-message");

let score = 0;
let gameRunning = true;


function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(() => {
            dino.classList.remove("jump");
        }, 600);
    }
}


setTimeout(() => {
    cactus.style.visibility = "visible";
    cactus.style.animation = "moveCactus 1.5s linear infinite";
}, 2000);


let checkGame = setInterval(() => {
    if (!gameRunning) return;

    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

   
    if (cactusLeft < 90 && cactusLeft > 40 && dinoBottom < 40) {
        gameOver();
    }
}, 10);


let scoreCounter = setInterval(() => {
    if (gameRunning) {
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
    }
}, 200);


function gameOver() {
    gameRunning = false;
    cactus.style.animation = "none";
    cactus.style.left = cactus.offsetLeft + "px";
    gameOverMessage.style.display = "block";
}


document.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "ArrowUp") {
        jump();
    } else if (e.key === "r" || e.key === "R") {
        location.reload();
    }
});


