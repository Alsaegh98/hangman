
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
<li>INITIALIZE currentWord</li>
<li>INITIALIZE correctLetters AS empty array</li>
<li>INITIALIZE wrongGuess AS 0</li>
<li>INITIALIZE displayWord AS empty string</li>
<li>INITIALIZE modalText AS empty string</li>

/*----- Cached Element References  -----*/
<li>INITIALIZE keyboard AS reference to keyboard element</li>
<li>INITIALIZE guessesText AS reference to guesses text element</li>
<li>INITIALIZE wordDisplay AS reference to word display element</li>
<li>INITIALIZE gameModal AS reference to game modal element</li>
<li>INITIALIZE replayBtn AS reference to replay button in the modal</li>

/*-------------- Functions -------------*/
FUNCTION resetGame()
    <li>**SET correctLetters TO empty array</li>
    <li>SET wrongGuess TO 0</li>
    <li>UPDATE guessesText with current wrongGuess</li>
    <li>REMOVE 'show' class from gameModal</li>
    <li>CALL initializeKeyboard()</li>
    <li>CALL getword()</li>
    <li>CALL updateDisplayWord()</li>

<li>FUNCTION initializeKeyboard()</li>
    <li>CLEAR keyboard content</li>
    <li>FOR EACH letter IN letters</li>
        <li>CREATE a button for the letter</li>
        <li>ADD click event listener to button that calls handleGuess with the button and letter</li>
        <li>APPEND button to keyboard</li>

FUNCTION getword()
    <li>SET currentWord TO a random word from wordlist</li>
    <li>SET displayWord TO a string of dashes of the same length as currentWord</li>
    <li>CALL updateDisplayWord()</li>

FUNCTION updateDisplayWord()
    <li>SET wordDisplay text content to displayWord with spaces between characters</li>

FUNCTION handleGuess(button, clickedLetter)
    <li>IF wrongGuess equals maxGuesses OR displayWord does not contain any dashes THEN
        RETURN</li>

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
    <li>IF isVictory THEN</li>
        <li>SET modalText to 'You found the word:'</li>
    <li>ELSE</li>
        <li>SET modalText to 'The correct word was:'</li>

    SET the modal heading based on victory status
    SET the modal content to modalText with currentWord
    ADD 'show' class to gameModal

/*----------- Event Listeners ----------*/
<li>ADD click event listener to replayBtn that calls resetGame()</li>

<li>CALL resetGame() to start the game </li>

Demo game

http://127.0.0.1:5500/


