const RandomNo = Math.round(Math.random()*100 + 1)
console.log(RandomNo);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.guesses')
const lowOrhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let PreviousGuesses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        ValidateGuess(guess);
    })
}
function ValidateGuess (guess){
    if (isNaN(guess)) {
        console.log('Please enter a valid number');
    } else if (guess < 1){
        console.log('Enter number greater than 1');
    } else if (guess > 100){
        console.log('Enter number greater lower than 100');
    } else {
        PreviousGuesses.push(guess)
        if (numGuess == 11) {
            DisplayGuess(guess)
            DisplayMessege(`Game Over random number was ${RandomNo}`)
            EndGame()
        }
    }
}

function CheckGuess (guess){
    //
}

function DisplayGuess (guess){
    //
}

function DisplayMessege (message){
    //
}

function EndGame (){
    //
}

function NewGame (){
    //
}




