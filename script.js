const words = ["javascript","html","css","programa","computador","desenvolvimento"];
let selectWord ="";
let correctLetters = [];
let wrongLetters =[];
let maxAttempts = 6;

function startGame(){
    selectWord = words[Math.floor(Math.random() * words.length)];
    correctLetters = [];
    wrongLetters = [];
    document.getElementById("message").textContent = "";
    displayWord();
    generateLetterButttons();
}
