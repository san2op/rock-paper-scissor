

function getComputerChoice(){
   let choice = ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)]; 
   return random;
}
console.log(getComputerChoice())

//The function computerChoice() first creates an array of the three possible choices for the computer
// to make: rock, paper, or scissors. It then uses the Math.floor() function to generate a random number 
//between 0 and 2, and uses that number to index into the array, selecting one of the three choices. 
//The function then returns the randomly selected choice.
//The console.log() statement at the end of the function prints the randomly selected choice to the console.

function playOneRound(playerSelection,computerSelection){
if (playerSelection === computerSelection)
    return ("it adraw");

 else if ((playerSelection==="rock") && (computerSelection==="paper")) {
 return("computer win")
}
 else if ((playerSelection==="paper" )&& (computerSelection==="scissors") ){
 return("computer win")
}
 else if((playerSelection==="scissors") && (computerSelection==="rock")) {
 return("computer  win")
}
else if((playerSelection==="rock") && (computerSelection==="scissors")) {
    return("you win")
   }
else if((playerSelection==="paper") && (computerSelection==="rock")) {
    return("you win")
   }
else if((playerSelection==="scissors") && (computerSelection==="paper")) {
    return("you win")
   }
}



let computerSelection = getComputerChoice();
let playerSelection = prompt("enter your choice:1-rock,2-paper,3-scissors");
console.log(computerSelection)
console.log(playerSelection)
// alert(playOneRound(playerSelection,computerSelection))
alert(playOneRound(playerSelection,computerSelection))
playOneRound()
playOneRound()
playOneRound()
playOneRound()
playOneRound()


//this is not correct find a solution to this .you are trying to make sure that some messege 
//is display to the user when the player is entering  input other than rock,paper,scissors.
switch (playerSelection) {
    case "rock":
      break;
    case "paper":
      break;
    case "scissors":
      break;
    default:
      alert("The user's input is not valid.")
      break;
  }
