// Variables
let humanScore = 0;
let computerScore = 0;
const scoreMenu = document.querySelector("#scoreMenu")

// Selectors
const rockButton = document.querySelector("#rockButton")
rockButton.addEventListener("click", () => playGame("ROCK"))

const paperButton = document.querySelector("#paperButton")
paperButton.addEventListener("click", () => playGame("PAPER"))

const scissorsButton= document.querySelector("#scissorsButton")
scissorsButton.addEventListener("click", () => playGame("SCISSORS"))

// Functions
function getComputerChoice() {
    const maxNumber = 3;
    const minNumber = 1;
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    let computerChoice;
    switch (randomNumber) {
        case 1:
            computerChoice = "ROCK"
            break;
        case 2:
            computerChoice = "PAPER"
            break;
        case 3:
            computerChoice = "SCISSORS"
            break;
    }
    return computerChoice
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    let roundCondition;
    if (humanChoice === computerChoice) {
        console.log(`Its a tie! Both choose ${humanChoice}`)
        roundCondition = "TIE"
    }
    else {
        switch (humanChoice) {
            case "ROCK":
                if (computerChoice === "SCISSORS") {
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                    roundCondition = "WON"
                }
                else {
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
                    roundCondition = "LOST"
                }
                break;
            case "PAPER":
                if (computerChoice === "ROCK") {
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                    roundCondition = "WON"
                }
                else {
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
                    roundCondition = "LOST"
                }
                break;
            case "SCISSORS":
                if (computerChoice === "PAPER") {
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                    roundCondition = "WON"
                }
                else {
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
                    roundCondition = "LOST"
                }
                break;
            default:
                console.log(`${computerChoice} vs ${humanChoice} is invalid!`)
        }
    }
    return roundCondition
}

function playGame(humanChoice) {
    let humanSelection = humanChoice
    let computerSelection = getComputerChoice(); 
    round = playRound(humanSelection, computerSelection);
    switch (round) {
        case "WON":
            ++humanScore;
            `You won! ${humanScore} to ${computerScore}.`
            break;
        case "LOST":
            ++computerScore;
            scoreMenu.textContent = `You lost! ${humanScore} to ${computerScore}.`
            break;
        case "TIE":
            scoreMenu.textContent = `Its a tie! ${humanScore} to ${computerScore}.`
            break;
    }
    if (humanScore >= 3) {
        scoreMenu.textContent = `You won the game! ${humanScore} to ${computerScore}.`
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore >= 3) {
            scoreMenu.textContent = `You lost the game! ${humanScore} to ${computerScore}.`
            humanScore = 0
            computerScore = 0
    }
}