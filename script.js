const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
const gameOverMessage = document.getElementById("game-over-message");

let score = 0;
let gameRunning = true;

// Make dino jump
function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(() => {
            dino.classList.remove("jump");
        }, 600);
    }
}

// Start cactus animation after delay
setTimeout(() => {
    cactus.style.visibility = "visible";
    cactus.style.animation = "moveCactus 1.5s linear infinite";
}, 2000);

// Collision check
let checkGame = setInterval(() => {
    if (!gameRunning) return;

    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Collision detected
    if (cactusLeft < 90 && cactusLeft > 40 && dinoBottom < 40) {
        gameOver();
    }
}, 10);

// Score update
let scoreCounter = setInterval(() => {
    if (gameRunning) {
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
    }
}, 200);

// Game Over logic
function gameOver() {
    gameRunning = false;
    cactus.style.animation = "none";
    cactus.style.left = cactus.offsetLeft + "px";
    gameOverMessage.style.display = "block";
}

// Restart on 'R'
document.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "ArrowUp") {
        jump();
    } else if (e.key === "r" || e.key === "R") {
        location.reload();
    }
});


