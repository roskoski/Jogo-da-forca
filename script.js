const words = ["javascript", "html", "css", "programa", "computador", "desenvolvimento"];
let selectedWord = "";
let correctLetters = [];
let wrongLetters = [];
let maxAttempts = 6;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    correctLetters = [];
    wrongLetters = [];
    document.getElementById("message").textContent = "";
    displayWord();
    generateLetterButtons();
}

function displayWord() {
    const wordDiv = document.getElementById("word");
    wordDiv.innerHTML = selectedWord
        .split("")
        .map(letter => (correctLetters.includes(letter) ? letter : "_"))
        .join(" ");
    
    if (!wordDiv.textContent.includes("_")) {
        document.getElementById("message").textContent = "🎉 Você venceu!";
        disableAllButtons();
    }
}

function generateLetterButtons() {
    const lettersDiv = document.getElementById("letters");
    lettersDiv.innerHTML = "";

    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i).toLowerCase();
        const button = document.createElement("button");
        button.textContent = letter;
        button.onclick = () => guessLetter(letter);
        lettersDiv.appendChild(button);
    }
}

function guessLetter(letter) {
    if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            displayWord();
        }
    } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            if (wrongLetters.length >= maxAttempts) {
                document.getElementById("message").textContent = `💀 Você perdeu! A palavra era: ${selectedWord}`;
                disableAllButtons();
            }
        }
    }
}

function disableAllButtons() {
    const buttons = document.querySelectorAll("#letters button");
    buttons.forEach(button => button.disabled = true);
}

function resetGame() {
    startGame();
}

startGame();
