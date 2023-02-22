/*
 some things to add
 1. the rules
 2. put semi-colons
 3. whenever a particular score increase can
    you light it up?
*/
const container = document.querySelector('.container');
let scores = document.querySelector('.scores')
let playerSelection_Rock = document.querySelector('.Rock');
let playerSelection_Paper = document.querySelector('.Paper');
let playerSelection_Scissors = document.querySelector('.Scissors');
let para = document.querySelector('.para');
let result = document.querySelector('.result');
let playerSelection = undefined;
let draw = 'Result : Draw';
let win = 'Result : You Win!';
let playerScore = document.querySelector('.playerScore');
let opponent_score = document.querySelector('.opponent_score');
let drawScore = document.querySelector('.drawScore');
let playerCount = 0;
let opponentCount = 0;
let drawCount = 0;

scores.appendChild(drawScore)
scores.appendChild(opponent_score)
scores.appendChild(playerScore)



function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
     if(random === 0){
         
        return 'Rock';
    }  else if(random === 1){
         
        return 'Paper';
    }  else if(random === 2){
        
        return 'Scissors';               
    }  
    
  }  


const div = document.createElement('div');
 
playerSelection_Rock.addEventListener('click', () => {  
    playerSelection = 'Rock';

    let computerChoice = getComputerChoice();
    console.log(computerChoice)
    console.log(playerSelection)
    if(playerSelection == computerChoice){        
        para.textContent = `Opponent's Selection : ${computerChoice}`;
        result.textContent = `${draw}`;
        container.appendChild(para);
        container.appendChild(result);  
        drawCount++
        drawScore.textContent = drawCount
        drawScore.textContent = `Draw Score : ${drawCount}`
        drawScore.classList.add('effects')

        setTimeout(function(){
            drawScore.classList.remove('effects')
        }, 100)
    
    }   else if (playerSelection !== computerChoice && computerChoice == 'Scissors'){
                result.textContent = `${win}`;
                para.textContent = `Opponent's Selection : ${computerChoice}`;
                container.appendChild(para);
                container.appendChild(result);
                playerCount++
                playerScore.textContent = playerCount
                playerScore.textContent = `Player Score : ${playerCount}`;
                playerScore.classList.add('effects')

                setTimeout(function(){
                    playerScore.classList.remove('effects')
                }, 100)
                                    
            } else if(playerSelection !== computerChoice && computerChoice == 'Paper'){
                result.textContent = 'Result : You Lose! Paper covers Rock';
                para.textContent = `Opponent's Selection : ${computerChoice}`;
                container.appendChild(para)
                container.appendChild(result)
                opponentCount++
                opponent_score.textContent = opponentCount
                opponent_score.textContent = `Opponent Score : ${opponentCount}`
                opponent_score.classList.add('effects')

                setTimeout(function(){
                    opponent_score.classList.remove('effects')
                }, 100)
            }
 } )

 playerSelection_Paper.addEventListener('click', () => {  
    playerSelection = 'Paper'

    let computerChoice = getComputerChoice();
    if(playerSelection == computerChoice){        
        result.textContent = `${draw}`;
        para.textContent = `Opponent's Selection : ${computerChoice}`;
        container.appendChild(para)
        container.appendChild(result); 
        drawCount++
        drawScore.textContent = drawCount
        drawScore.textContent = `Draw Score : ${drawCount}` 
        drawScore.classList.add('effects')

        setTimeout(function(){
            drawScore.classList.remove('effects')
        }, 100)
            
    }   else if (playerSelection !== computerChoice && computerChoice == 'Scissors'){
                result.textContent = 'Result : You Lose! Scissors cuts Paper';
                para.textContent = `Opponent's Selection : ${computerChoice}`;
                container.appendChild(para)
                container.appendChild(result)
                opponentCount++
                opponent_score.textContent = opponentCount
                opponent_score.textContent = `Opponent Score : ${opponentCount}`
                opponent_score.classList.add('effects')

                setTimeout(function(){
                    opponent_score.classList.remove('effects')
                }, 100)
                               
            } else if(playerSelection !== computerChoice && computerChoice == 'Rock'){
                result.textContent = `${win}`;
                para.textContent = `Opponent's Selection : ${computerChoice}`;
                container.appendChild(para)
                container.appendChild(result)
                playerCount++
                playerScore.textContent = playerCount
                playerScore.textContent = `Player Score : ${playerCount}`;
                playerScore.classList.add('effects')

                setTimeout(function(){
                    playerScore.classList.remove('effects')
                }, 100)
           }
 } )

 playerSelection_Scissors.addEventListener('click', () => {  
    playerSelection = 'Scissors'

    let computerChoice = getComputerChoice();
    if(playerSelection == computerChoice){        
        result.textContent = `${draw}`;
        para.textContent = `Opponent's Selection : ${computerChoice}`;
        container.appendChild(para)
        container.appendChild(result);  
        drawCount++
        drawScore.textContent = drawCount
        drawScore.textContent = `Draw Score : ${drawCount}` 
        drawScore.classList.add('effects')

        setTimeout(function(){
            drawScore.classList.remove('effects')
        }, 100)
        console.log('Draw')      
    }   else if (playerSelection !== computerChoice && computerChoice == 'Rock'){
                result.textContent = 'Result : You Lose! Rock crushes Scissors';
                para.textContent = `Opponent's Selection : ${computerChoice}`;
                container.appendChild(para)
                container.appendChild(result)
                opponentCount++
                opponent_score.textContent = opponentCount
                opponent_score.textContent = `Opponent Score : ${opponentCount}`
                opponent_score.classList.add('effects')

                setTimeout(function(){
                    opponent_score.classList.remove('effects')
                }, 100)
               
             
            } else if(playerSelection !== computerChoice && computerChoice == 'Paper'){
                result.textContent = `${win}`;
                para.textContent = `Opponent's Selection : ${computerChoice}`;
                container.appendChild(para)
                container.appendChild(result)
                playerCount++ 
                playerScore.textContent = playerCount
                playerScore.textContent = `Player Score : ${playerCount}`;
                playerScore.classList.add('effects')

                setTimeout(function(){
                    playerScore.classList.remove('effects')
                }, 100)
             
            }
 } )

