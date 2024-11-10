let humanScore = 0;
let computerScore = 0;
let computer = "";
let human = "";


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

function getHumanChoice(){
    let choice = prompt("Let's play rock, paper, scisscors! Choose one:")
    if(choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors")
        return choice;
    else{
        alert("Try again and don't be retarded! CHOOSE BETWEEN ROCK, PAPER AND SCISSORS!")
        return getHumanChoice();
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
            break;
        case 2:
            console.log("Human won this round!")
            humanScore = humanScore + 1;
            console.log("Human score is: " + humanScore)
            break;
        case 3:
            console.log("No one won this round!")
            break;
        default:
            console.log("Is this even working?")
    }
}


function playGame(){
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(computerScore>humanScore)
        console.log("COMPUTER WON THE TOURNAMENT!")
    else if(humanScore>computerScore)
    console.log("HUMAN WON THE TOURNAMENT!")
    else
    console.log("NO ONE WON THE TOURNAMENT!")
}

playGame();


