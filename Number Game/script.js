let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // 1–100
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guess").value = "";
    document.getElementById("emoji").textContent = "🤔";
    document.body.style.backgroundColor = "#ffe4f0";
}

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    attempts++;

    if (!guess || guess < 1 || guess > 100) {
        document.getElementById("message").textContent = "🚫 Enter a number between 1 and 100!";
        document.getElementById("emoji").textContent = "🙄";
        return;
    }

    if (guess === secretNumber) {
        document.getElementById("message").textContent = `🎉 Woohoo! You guessed it in ${attempts} tries.`;
        document.getElementById("emoji").textContent = "🤩";
        document.body.style.backgroundColor = "#90ee90";
    } else if (guess < secretNumber) {
        document.getElementById("message").textContent = "📉 Too low! Go higher!";
        document.getElementById("emoji").textContent = "😜";
        document.body.style.backgroundColor = "#add8e6";
    } else {
        document.getElementById("message").textContent = "📈 Too high! Go lower!";
        document.getElementById("emoji").textContent = "🤪";
        document.body.style.backgroundColor = "#ffcccb";
    }
}

function resetGame() {
    startGame();
}

document.getElementById("guessBtn").addEventListener("click", checkGuess);
document.getElementById("resetBtn").addEventListener("click", resetGame);

// Start the game when the page loads
startGame();
