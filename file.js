let playerSelection = prompt('Rock, Paper or Scissors')
playerSelection = playerSelection.toLowerCase()
if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
  function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
     if(random === 0){
         console.log('Rock')
        return 'Rock'
    }  else if(random === 1){
         console.log('Paper')
        return 'Paper'
    }  else if(random === 2){
        console.log('Scissors')
        return 'Scissors'               
    } 
}



function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase()
    if(playerSelection === computerSelection){
        return `Draw`
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper beats Rock'
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You Lose! Scissors beats Paper'
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You Lose! Rock beats Scissors'
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You Win!'
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You Win!'
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win!'
    }              
    }  
        
    let playerScore = 0;
    let computerScore = 0;    
    let drawScore = 0 

    function game() {
        for (let i = 0; i < 5; i++) {
            
            computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);
            alert(result)
           if (result === 'You Win!') {
              playerScore += 1;                                                          
           } else if (result === 'Draw') {
              drawScore += 1;
           } else {
              computerScore++;
           }
        }                                                                                 
     }  

     game();

     alert(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}\nDraw: ${drawScore}`)
     if(playerScore > computerScore){
         alert(`Congratulations! You Win\n\nPlease Refresh Page To Have Another Go`)
     }else if (computerScore > playerScore){
         alert(`Better Luck Next Time\n\nPlease Refresh Page To Have Another Go`)
     }else{
         alert(`This Round Was A Tie\n\nPlease Refresh Page To Have Another Go`)
     }

} else {
    alert('Please Input Rock, Paper or Scissors')
}




