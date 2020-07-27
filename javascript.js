let playerScore = 0;
let computerScore = 0;
let round = 0;


function computerPlay(){
    let option = ["rock" , "paper" , "scissor"];
    return option[Math.floor(Math.random() * option.length)];
}
/*function playersPlay(){
    let playerInput = prompt("Enter your play, Rock or Paper or Scissor")
    playerInput = playerInput.toLowerCase();
    if(playerInput != "rock" && playerInput != "paper" && playerInput != "scissor"){
        alert(playerInput + " is not a valid input,Please enter a valid input");
        playersPlay();
    }
    else{
        return playerInput;
    }
}*/

function playRound(computerSelection , playerSlection){
    switch(playerSlection){
        case "rock":
            if (computerSelection == "paper"){
                computerScore++;
               return("You lose, " + computerSelection + " beats " + playerSlection);
            }
            else if (computerSelection == "scissor"){
                playerScore++;
               return("You win, " + playerSlection + " beats " + computerSelection);
            }
            else
               return("Its a draw");
            break;
        
        case "paper":
            if (computerSelection == "scissor"){
                computerScore++;
                return("You lose, " + computerSelection + " beats " + playerSlection);
            }
            else if (computerSelection == "rock"){
                playerScore++;
                return("You win, " + playerSlection + " beats " + computerSelection);
            }
            else return("Its a draw");
            break;
        
        case "scissor":
            if (computerSelection == "rock"){
                computerScore++;
                return("You lose, " + computerSelection + " beats " + playerSlection);
            }
            else if (computerSelection == "paper"){
                playerScore++;
                return("You win, " + playerSlection + " beats " + computerSelection);
            }
            else return("Its a draw");
            break;
            
        default:
            return("invaild play");
    }
}

const main = document.querySelector('#main');
let playersplay = document.querySelector('#playersPlay');
const paraResult = document.createElement('p');
const paraScore = document.createElement('p');
const btn = document.querySelector('#submit');

btn.addEventListener('click', () =>{
computerSelection = computerPlay();
playerSlection = playersplay.value; 
paraResult.textContent = playRound(computerSelection, playerSlection);
paraScore.textContent = 'Player : ' + playerScore + '        Computer : ' + computerScore;
paraResult.classList.add('para');
paraScore.classList.add('para');
main.appendChild(paraResult);
main.appendChild(paraScore);
round++;
declareWinner(round, computerScore,playerScore);
console.log('it worked');
});


function declareWinner(round){
    if (0 == round % 5){
        alert('Winner is : ' + ((computerScore > playerScore) ? 'Computer' : 'Player'));
        computerScore = playerScore = 0;
        paraResult.textContent = paraScore.textContent = null;
    }

}