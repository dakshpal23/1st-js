let RandomNo = Math.round(Math.random()*100 + 1)
console.log(RandomNo);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
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
            CleanUp(guess)
            DisplayMessege(`Game Over random number was ${RandomNo}`)
            EndGame()
        } else {
            CleanUp(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess (guess){
    if (guess == RandomNo) {
        DisplayMessege(`You Guessed it right`)
        EndGame()
    } else if (guess < RandomNo){
        DisplayMessege(`Number is TOOO Low`)
    } else if (guess > RandomNo){
        DisplayMessege(`Number is TOOO High`)
    }
}

function CleanUp (guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

function DisplayMessege (message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function EndGame (){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id = "New">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    NewGame()
}

function NewGame (){
    const NewGame = document.querySelector('#New');
    New.addEventListener('click', function (e){
        RandomNo = Math.round(Math.random()*100 + 1);
        PreviousGuesses = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}




