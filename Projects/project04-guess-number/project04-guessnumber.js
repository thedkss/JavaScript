let randomNumber = Math.floor(Math.random() * 100 )
const button = document.getElementById('button')
const userInput = document.getElementById('number')
let previousguesses = document.getElementById('previousguesses')
let guessesremaining = document.getElementById('guessesremaining')
const result = document.getElementById('result')
const lowOrHigh = document.querySelector('.lowOrHigh')
let startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 1
let playGame = true

if(playGame){
    button.addEventListener('click', (e)=>{
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
        userInput.focus()
        // result.innerHTML = userInputNumber()        
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number!!");
    }else if(guess<1)
    {
        alert("Number Should Not be Less than ONE!!");
    }else if(guess>100)
    {
        alert("Number Should Not be Greater than Hundred!!");
    }else
    {
        prevGuess.push(guess)
        if (numOfGuess===11) {
            displayGuess(guess)
            displayMessge(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }    
}

function checkGuess(guess) {
    if (guess===randomNumber) {
        displayMessge(`Right Guess`)
        endGame()
    }else if(guess<randomNumber){
        displayMessge(`Number is Tooo Low`)
    }else if(guess>randomNumber){
        displayMessge(`Number is Tooo High`)
    }
}
function displayGuess(guess) {
    userInput.value = ''
    previousguesses.innerHTML += ` ${guess},  `
    numOfGuess++
    guessesremaining.innerHTML = `${11-numOfGuess}`
}
function displayMessge(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}   

function newGame() {
    const newGameBtn = document.querySelector('#newgame')
    newGameBtn.style.cursor = 'pointer'
    newGameBtn.style.color = 'orange'
    newGameBtn.addEventListener('click', (e)=>{
        randomNumber = Math.floor(Math.random() * 100 ) 
        prevGuess = []
        numOfGuess = 1
        previousguesses.innerHTML = ''
        guessesremaining.innerHTML = `${11 - numOfGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        userInput.focus()
        
    })
}
