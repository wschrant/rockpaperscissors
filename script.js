function getComputerChoice(){
    const randomNumber = Math.random();

    if (randomNumber <= .34){
        return 'rock';
    }
    else if (randomNumber <= .67){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
let playerscore = 0;
let computerscore = 0;

let getplayerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase;

const playerSelection = getplayerSelection;
const computerSelection = getComputerChoice();

function playround(playerSelection,computerSelection){
    for (let i = o; i < 5; i++){
        
        if (playerSelection === computerSelection){
            alert("Draw!");
        }
        else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock')||
            (playerSelection === 'scissors' && computerSelection === 'paper')
            ){
                alert('You win! ${playerSelection} beats ${computerSelection}');
                playerscore += 1;
            }
         else{
            alert('Computer Wins! ${computerSelection} beats ${playerSelection}');
            computerscore += 1;
         } 
         playround(playerSelection,computerSelection);  
        }
}
if (playerscore > computerscore){
    alert("Player Wins!")
}
else if (computerscore > playerscore){
    alert("Computer Wins!")
}
else{
    alert("Tie!")
}



