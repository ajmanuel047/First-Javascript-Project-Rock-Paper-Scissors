let playerSelection = prompt('Rock, Paper or Scissors')
playerSelection = playerSelection.toLowerCase()
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
        
            playerSelection = playerSelection.toLowerCase()
            
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
             
             
            function game() {
                for (let i = 0; i < 5; i++) {
                    if (outPut === 'You Win!') {
                      playerScore += 1;                                                          
                   } else if (outPut === 'Draw') {
                      drawScore += 1;
                   } else {
                      computerScore++;
                   }
                }                                                                                 
             } 

  
