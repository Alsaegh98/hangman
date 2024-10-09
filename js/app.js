/*---------- Constants ---------*/

const wordlist = ['Cat', 'Dog', 'Sun', 'Run', 'Hat', 'Tree', 'Book', 'Jump', 
'Blue', 'Fish', 'Apple', 'Chair', 'Dance', 'Light', 'Storm', 'Friend', 'Market',
 'Bright', 'Travel', 'Garden', 'Amazing', 'Gallery', 'Journey', 'Relaxed', 'Respect',
  'Beautiful', 'Elephant', 'Mountain', 'Sunshine', 'Activity'];
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const maxGuesses = 6;

/*---------- Variables (state) ---------*/
let currentWord;
let correctLetters;
let wrongGuess;
let displayWord = '';
let modalText;

/*----- Cached Element References  -----*/
const keyboard = document.querySelector('.keyboard');
const guessesText = document.querySelector('.guesses-text b');
const wordDisplay = document.querySelector('.word-display');
const gameModal = document.querySelector('.game-modal');
const replayBtn = gameModal.querySelector('.replay');

/*-------------- Functions -------------*/
function resetGame() {
    correctLetters = [];
    wrongGuess = 0;
    guessesText.innerText = `${wrongGuess} / ${maxGuesses}`;
    gameModal.classList.remove('show');
    initializeKeyboard();
    getword();
    updateDisplayWord();
}

function initializeKeyboard() {
    keyboard.innerHTML = '';
    for (let letter of letters) {
        const letterButton = document.createElement('button');
        letterButton.textContent = letter;
        letterButton.addEventListener('click', () => handleGuess(letterButton, letter));
        keyboard.appendChild(letterButton);
    }
}

function getword() {
    currentWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    displayWord = '-'.repeat(currentWord.length);
    updateDisplayWord();
}

function updateDisplayWord() {
    wordDisplay.textContent = displayWord.split('').join(' ');
}

// function handleGuess(button, clickedLetter) {

//     if (wrongGuess === maxGuesses || !displayWord.includes('-')) {
//         return;
//     }

//     button.disabled = true;

//     if (currentWord.includes(clickedLetter.toLowerCase())) {
//         let newDisplay = '';
//         for (let i = 0; i < currentWord.length; i++) {
//             if (currentWord[i] === clickedLetter.toLowerCase()) {
//                 newDisplay += clickedLetter.toLowerCase();
//             } else {
//                 newDisplay += displayWord[i];
//             }
//         }
//         displayWord = newDisplay;
//         updateDisplayWord();
//     } else {
//         wrongGuess++;
//         guessesText.innerText = `${wrongGuess} / ${maxGuesses}`;
//     }

  
//     if (wrongGuess === maxGuesses) {
//         return gameOver(false);
//     }
//     if (!displayWord.includes('-')) {
//         return gameOver(true);
//     }
// }

function handleGuess(button, clickedLetter) {
    if (wrongGuess === maxGuesses || !displayWord.includes('-')) {
        return;
    }

    button.disabled = true;

    let letterFound = false;
    let newDisplay = '';
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === clickedLetter.toLowerCase() || currentWord[i] === clickedLetter.toUpperCase()) {
            newDisplay += currentWord[i];
            letterFound = true;
        } else {
            newDisplay += displayWord[i];
        }
    }

    if (!letterFound) {
        wrongGuess++;
        guessesText.innerText = `${wrongGuess} / ${maxGuesses}`;
    }

    displayWord = newDisplay;
    updateDisplayWord();

    if (wrongGuess === maxGuesses) {
        return gameOver(false);
    }
    if (!displayWord.includes('-')) {
        return gameOver(true);
    }
}


function gameOver(isVictory) {
    if (isVictory)
         modalText = `You found the word:` 
        else{
            modalText =  'The correct word was:';
        }
    gameModal.querySelector("h4").innerText = isVictory ? 'YOU WON' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

/*----------- Event Listeners ----------*/
replayBtn.addEventListener("click", resetGame);

resetGame();