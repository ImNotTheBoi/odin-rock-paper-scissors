let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
    console.log(computerChoice)
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    toString(humanChoice)
    humanChoice = humanChoice.toUpperCase()
    console.log(humanChoice)
    if (humanChoice === "ROCK" || "PAPER" || "SCISSORS") {
        return humanChoice
    }
    else {
        return null
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Its a tie! Both choose ${humanChoice}`)
    }
    else {
        switch (humanChoice) {
            case "ROCK":
                if (computerChoice === "SCISSORS") {
                    humanScore = humanScore++;
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                }
                else {
                    computerScore = computerScore++;
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
                }
                break;
            case "PAPER":
                if (computerChoice === "ROCK") {
                    humanScore = humanScore++;
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                }
                else {
                    computerScore = computerScore++;
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
                }
                break;
            case "SCISSORS":
                if (computerChoice === "PAPER") {
                    humanScore = humanScore++;
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                }
                else {
                    computerScore = computerScore++;
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
                }
                break;
        }
    }
}

playRound(humanSelection, computerSelection);
