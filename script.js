let getPlayerChoice;

let rock = document.querySelector(".Rock");
let paper = document.querySelector(".Paper");
let scissors = document.querySelector(".Scissors");

// rock.addEventListener('click', playRound);
rock.addEventListener('click', isRock);
paper.addEventListener('click', isPaper);
scissors.addEventListener('click', isScissors);


function isRock () {
    getPlayerChoice = "rock";
    playRound()
}

function isPaper () {
    getPlayerChoice = "paper";
    playRound()
}

function isScissors () {
    getPlayerChoice = "scissors";
    playRound()
}


function getComputerChoice() 

{
    
    let randNum = Math.random()*3;
    
    let computerChoice = 
    
    // if the number is between 0 and 1(exclusive) assign rock
    (0 <= randNum && randNum < 1) ? "rock" : 
    
    // if the number is between 1 and 2(exclusive) assign paper                    
    (1 <= randNum && randNum < 2) ? "paper" :
    
    // if the number is between 2 and 3(exclusive) assign scissors                     
    (2 <= randNum && randNum < 3) ? "scissors" :
    
    // There will be no error but you need a falsy value                    
    "Error";
    
                         
    return computerChoice;

}

function playRound(playerSelection,computerSelection)

{

    playerSelection = getPlayerChoice;


    computerSelection = getComputerChoice();

    let result;
    // condition for a tie
    if (playerSelection === computerSelection) 
    
    {
    
        result = console.log(`It's a Tie!!! You Chose ${playerSelection.toUpperCase()} and the Computer Chose ${computerSelection.toUpperCase()} too.`);
    
        return result;

    }
    // condition for player to win 
    else if ( 
        
        (playerSelection === "rock" && computerSelection === "scissors") || 
        
        (playerSelection === "paper" && computerSelection === "rock") || 
        
        (playerSelection === "scissors" && computerSelection === "paper")) 
    
    {
    
        result = console.log(`You Win!!! You Chose ${playerSelection.toUpperCase()} and the Computer Chose ${computerSelection.toUpperCase()}.`);
    
        return result;

    }
    // condition for computer to win
    else if ( 
        
        (computerSelection === "rock" && playerSelection === "scissors") || 
        
        (computerSelection === "paper" && playerSelection === "rock") || 
        
        (computerSelection === "scissors" && playerSelection === "paper")) 
    
    {
    
        result = console.log(`You Lose!!! You Chose ${playerSelection.toUpperCase()} and the Computer Chose ${computerSelection.toUpperCase()}.`);
    
        return result;

    }

    else 
    {
    
        console.log(`You've made a typo!!!`);
    
        return null;

    }

}

// function game() 

// {
//     playRound()
//     playRound()
//     playRound()
//     playRound()
//     playRound()

// }

// game()

