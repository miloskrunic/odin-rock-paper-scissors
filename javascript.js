let humanScore = 0;
let computerScore = 0;
let computer = "";
let human = "";

let humanScoreDisplay = document.querySelector("#human-score");
let computerScoreDisplay = document.querySelector("#computer-score");

let rockBtn = document.querySelector("#RCK");
let paperBtn = document.querySelector("#PAP");
let scissorsBtn = document.querySelector("#SCI");

rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));

function getComputerChoice(){
    let r;
    r = Math.random()* 10;
    if (r<3.33){
        console.log("Computer choose rock")
        return computer = "rock"
    }
    else if(r<6.66){
        console.log("Computer choose paper")
        return computer = "paper"
    }
    else{
        console.log("Computer choose scissors")
        return computer = "scissors"
    }
}

function playRound(humanChoice, computerChoice){
    let result = 0;
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice)
        result = 3;
    else if (humanChoice === "rock" && computerChoice === "scissors")
        result = 2;
    else if (humanChoice === "paper" && computerChoice === "rock")
        result = 2;
    else if (humanChoice === "scissors" && computerChoice === "paper")
        result = 2;
    else if ( computerChoice === "paper" && humanChoice === "rock")
        result = 1;
    else if ( computerChoice === "rock" && humanChoice === "scissors")
        result = 1;
    else if ( computerChoice === "scissors" && humanChoice === "paper")
        result = 1;

    switch(result){
        case 1:
            console.log("Computer won this round!")
            computerScore = computerScore + 1;
            console.log("Computer score is: " + computerScore)
            computerScoreDisplay.textContent = computerScore;
            break;
        case 2:
            console.log("Human won this round!")
            humanScore = humanScore + 1;
            console.log("Human score is: " + humanScore)
            humanScoreDisplay.textContent = humanScore;
            break;
        case 3:
            console.log("No one won this round!")
            break;
        default:
            console.log("Is this even working?")
    }
    checkWinner();
}

function checkWinner(){
    if(humanScore == 5){
        alert("HUMAN WON AGAINST THE MACHINE!!!");
    } else if(computerScore == 5){
        alert("MACHINES HAVE CONQUERED THE WORLD!!!");
    }
}
