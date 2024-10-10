
## hangman
game idea

Hangman is a word-guessing game built using html, css, and javascript, where players attempts to guess a hidden word by suggesting letters within a certain number of guesses.
It is a fun game to practice vocabulary, spelling, increases the logical thinking, and language skills.
Spirit of competition.


<ul>
<li>As a user, I want to see a landing page when I arrive at the website to know I'm in the right place.</li>
<li>  As a user, I want to see a hanger in the page.</li>
<li> As a user, I want to see a clear buttons of all the  alphabetical letters at the bottom of the page.</li>
<li> As a user, I want to see a clear dashs that needs to show me how many letters are there and how many I got right and how many letters left for me to choose or guess.</li>
<li> As a user, I want to see a display of the stick man once I get a wrong guess. </li>
<li> As a user, I want to see a display if I lost the game or won.</li>
<li> As a user, I expect if I clicked a letter I can’t use that same letter again.</li>
<li>As a user, I want to see a hanger in the page.</li>
<li>As a user, I want to see a clear buttons of all the  alphabetical letters at the bottom of the page.</li>
<li>As a user, I want to see a clear dashs that needs to show me how many letters are there and how many I got right and how many letters left for me to choose or guess.</li>
<li>As a user, I want to see a display of the stick man once I get a wrong guess. </li>
<li>As a user, I want to see a display if I lost the game or won.</li>
<li>As a user, I expect if I clicked a letter I can’t use that same letter again.</li>

</ul>

psuedo code

DEFINE wordlist AS array of words
DEFINE letters AS array of uppercase alphabet letters
DEFINE maxGuesses AS 6

/*---------- Variables (state) ---------*/
INITIALIZE currentWord
INITIALIZE correctLetters AS empty array
INITIALIZE wrongGuess AS 0
INITIALIZE displayWord AS empty string
INITIALIZE modalText AS empty string

/*----- Cached Element References  -----*/
INITIALIZE keyboard AS reference to keyboard element
INITIALIZE guessesText AS reference to guesses text element
INITIALIZE wordDisplay AS reference to word display element
INITIALIZE gameModal AS reference to game modal element
INITIALIZE replayBtn AS reference to replay button in the modal

/*-------------- Functions -------------*/
FUNCTION resetGame()
    SET correctLetters TO empty array
    SET wrongGuess TO 0
    UPDATE guessesText with current wrongGuess
    REMOVE 'show' class from gameModal
    CALL initializeKeyboard()
    CALL getword()
    CALL updateDisplayWord()

FUNCTION initializeKeyboard()
    CLEAR keyboard content
    FOR EACH letter IN letters
        CREATE a button for the letter
        ADD click event listener to button that calls handleGuess with the button and letter
        APPEND button to keyboard

FUNCTION getword()
    SET currentWord TO a random word from wordlist
    SET displayWord TO a string of dashes of the same length as currentWord
    CALL updateDisplayWord()

FUNCTION updateDisplayWord()
    SET wordDisplay text content to displayWord with spaces between characters

FUNCTION handleGuess(button, clickedLetter)
    IF wrongGuess equals maxGuesses OR displayWord does not contain any dashes THEN
        RETURN

    DISABLE button

    INITIALIZE letterFound AS false
    INITIALIZE newDisplay AS empty string
    FOR EACH character IN currentWord
        IF character matches clickedLetter (case insensitive)
            APPEND character to newDisplay
            SET letterFound TO true
        ELSE
            APPEND corresponding character from displayWord to newDisplay

    IF letterFound is false THEN
        INCREMENT wrongGuess
        UPDATE guessesText

    SET displayWord TO newDisplay
    CALL updateDisplayWord()

    IF wrongGuess equals maxGuesses THEN
        CALL gameOver with false
    ELSE IF displayWord does not contain any dashes THEN
        CALL gameOver with true

FUNCTION gameOver(isVictory)
    IF isVictory THEN
        SET modalText to 'You found the word:'
    ELSE
        SET modalText to 'The correct word was:'

    SET the modal heading based on victory status
    SET the modal content to modalText with currentWord
    ADD 'show' class to gameModal

/*----------- Event Listeners ----------*/
ADD click event listener to replayBtn that calls resetGame()

CALL resetGame() to start the game


