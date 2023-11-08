// ------->>>>>>>>>>>>>>Initialized variables

let getPlayerChoice;

let playerCount = 0;

let computerCount = 0;

// ------->>>>>>>>>>>>>>Reference DOMs

let playerDisplay = document.querySelector(".playerDisplay");

let computerDisplay = document.querySelector(".computerDisplay");

let rock = document.querySelector(".Rock");

let paper = document.querySelector(".Paper");

let scissors = document.querySelector(".Scissors");

let restart = document.querySelector(".Restart");

// ------->>>>>>>>>>>>>>EventListeners

restart.addEventListener('click',isRestart);

rock.addEventListener('click', isRock);

paper.addEventListener('click', isPaper);

scissors.addEventListener('click', isScissors);


alert("\nThe First One to Reach Five Wins!!!! \n\nGood Luck!")

// ------->>>>>>>>>>>>>>Callback functions to EventListeners
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

function isRestart() {
    
    playerCount = 0; 
    
    computerCount = 0;
    
    playerDisplay.textContent = playerCount;
       
    computerDisplay.textContent = computerCount;
    
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

    // See Callback Functions isRock,isPaper,isScissors.
    playerSelection = getPlayerChoice;


    computerSelection = getComputerChoice();


    if ( playerCount === 5 || computerCount === 5) 
    
    {
    //    alert is there for when the user clicks any three buttons accidentally for the sixth time
       alert("would you like to restart?");
       
       isRestart()
    //    Update the Scorecard Tally
       playerDisplay.textContent = playerCount;
       
       computerDisplay.textContent = computerCount;
    
    }
    
    else
    
    {
        // condition for a tie
          if (playerSelection === computerSelection) 
    
          {
      
            
      
  
          }
        // condition for player to win 
          else if ( 
          
              (playerSelection === "rock" && computerSelection === "scissors") || 
          
              (playerSelection === "paper" && computerSelection === "rock") || 
          
              (playerSelection === "scissors" && computerSelection === "paper")) 
      
          {
              playerCount += 1
              
              

                if (playerCount === 5){
                
                playerDisplay.textContent = 5;

                playerDisplay.style.color = "Green"

                computerDisplay.style.color = "Red"
                
                alert(`You Win, the score is ${playerCount} to ${computerCount}`); 

           }
                else {
           
                    playerDisplay.textContent = playerCount;
                }
  
           
  
          }
            // condition for computer to win
          else if ( 
          
              (computerSelection === "rock" && playerSelection === "scissors") || 
          
              (computerSelection === "paper" && playerSelection === "rock") || 
          
              (computerSelection === "scissors" && playerSelection === "paper")) 
      
          {
              computerCount += 1;

                if (computerCount === 5){

                computerDisplay.textContent = 5;

                computerDisplay.style.color = "Green"

                playerDisplay.style.color = "Red"
                
                
                alert(`You Lose, the score is ${playerCount} to ${computerCount}`); 

           }
                else{
                    
                    computerDisplay.textContent = computerCount;
                
                }
  
            
  
          }
  
          else 
          {
      
              alert(`You've made a typo!!!`);
      
              return null;
  
          }
     
    }
    
    return

    

}




