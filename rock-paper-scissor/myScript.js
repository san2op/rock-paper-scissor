let computerScore = 0;
let playerScore = 0;


// adding UI //assigning DOM to variables

var rockButton = document.querySelector('.rock');
var paperbutton = document.querySelector('.paper');
var scissorsButton = document.querySelector('.scissors');
var outcomeDiv = document.querySelector('.outcome');
var playerScoreSpan = document.querySelector('.playerScore');
var computerScoreSpan = document.querySelector('.computerScore');

function getComputerChoice(){
   let choice = ["rock", "paper", "scissors"];
   let random = choice[Math.floor(Math.random() * choice.length)]; 
   return random;
}


//The function computerChoice() first creates an array of the three possible choices for the computer
// to make: rock, paper, or scissors. It then uses the Math.floor() function to generate a random number 
//between 0 and 2, and uses that number to index into the array, selecting one of the three choices. 
//The function then returns the randomly selected choice.
//The console.log() statement at the end of the function prints the randomly selected choice to the console.

function playOneRound(playerSelection,computerSelection){
if (playerSelection === computerSelection){
const p = document.createElement('p');
 p.classList.add('para');
 p.innerText = "it adraw"
    outcomeDiv.appendChild(p)
}
 else if ((playerSelection==="rock") && (computerSelection==="paper")) {
  computerScore++
  const p = document.createElement('p')
   p.classList.add('para')
   p.innerText = "You lose! Paper beats rock"
      outcomeDiv.appendChild(p)
}
 else if ((playerSelection==="paper" )&& (computerSelection==="scissors") ){
  computerScore++
  const p = document.createElement('p')
  p.classList.add('para')
  p.innerText = "You lose! scissors beats paper"
     outcomeDiv.appendChild(p)
}
 else if((playerSelection==="scissors") && (computerSelection==="rock")) {
  computerScore++
  const p = document.createElement('p')
   p.classList.add('para')
   p.innerText = "You lose! rock beats scissors"
      outcomeDiv.appendChild(p)
}
else if((playerSelection==="rock") && (computerSelection==="scissors")) {
  playerScore++
  const p = document.createElement('p')
   p.classList.add('para')
   p.innerText = "You win! rock beats scissors"
       outcomeDiv.appendChild(p)
   }
else if((playerSelection==="paper") && (computerSelection==="rock")) {
  playerScore++
  const p = document.createElement('p')
   p.classList.add('para')
   p.innerText = "You win! paper beats rock"
       outcomeDiv.appendChild(p)
   }
else if((playerSelection==="scissors") && (computerSelection==="paper")) {
  playerScore++
  const p = document.createElement('p')
  p.classList.add('para')
  p.innerText = "You win! scissors beats paper"
      outcomeDiv.appendChild(p)
   }
}

//adding UI

const updateScore = (playerScore,computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer score: ${computerScore}`
}

const checkforWinner = (playerScore,computerScore) => {
  if (playerScore === 5){
  const h2 = document.createElement('h2')
  h2.classList.add('playerWin')
  h2.innerText = `Player won ${playerScore} to ${computerScore} good job Player! --you saved us!!`
  outcomeDiv.append(h2)
}

else if(computerScore === 5){
    const h2 = document.createElement('h2')
    h2.classList.add('computerWin')
    h2.innerText = `Player lose ${playerScore} to ${computerScore} We are doomed!!! computer will rule over us!!!!`
    outcomeDiv.append(h2)
}
}

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'rock';
  playOneRound(playerSelection,computerSelection)
  updateScore(playerScore,computerScore)
  checkforWinner(playerScore,computerScore)
});

paperbutton.addEventListener("click", () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'paper';
  playOneRound(playerSelection,computerSelection)
  updateScore(playerScore,computerScore)
  checkforWinner(playerScore,computerScore)
});


scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'scissors';
  playOneRound(playerSelection,computerSelection)
  updateScore(playerScore,computerScore)
  checkforWinner(playerScore,computerScore)
});






