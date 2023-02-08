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