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

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    toString(humanChoice)
    humanChoice = humanChoice.toUpperCase()
    if (humanChoice === "ROCK" || "PAPER" || "SCISSORS") {
        return humanChoice
    }
    else {
        return null
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    let roundCondition;
    if (humanChoice === computerChoice) {
        console.log(`Its a tie! Both choose ${humanChoice}`)
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    while (true) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        round = playRound(humanSelection, computerSelection);
        if (round === "WON") {
            humanScore = ++humanScore;
            if (humanScore === 3) {
                console.log("You won the game!");
                break;
            }
            else {
                round = null;
            }
        }
        else if (round === "LOST") {
            computerScore = ++computerScore;
                if (computerScore === 3) {
                    console.log("You lost the game!");
                    break;
                }
                else {
                    round = null;
                }
        }
        else {
            round = null;
        }
    }
}

playGame();