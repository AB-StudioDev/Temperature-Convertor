
const choices = ["rock","paper","scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScoreDisplay") ;
const computerScoreDisplay = document.getElementById("computerScoreDisplay") ;
const comChoice = document.getElementById("comChoice")
const tieDisplay= document.getElementById("tieDisplay")
const resetbtn = document.getElementById("resetbtn") 
const historybtn = document.getElementById("historybtn")

const score =    JSON.parse(localStorage.getItem('score')) || {
 playerScore : 0,
 computerScore : 0,
 tie:0
             
              };
              console.log()

function playGame(playerChance){
    

    const computerChance = choices[Math.floor(Math.random() * 3 )];
    let result = "";
     if(playerChance === computerChance){
    result = "It's  A Tie!"
    resultDisplay.classList.remove("greenColor","redColor")
                     
    if(computerChance === 'paper' && playerChance === 'paper'){
                 comChoice.innerHTML = "<button>✋</button>";
                 comChoice.classList.add("paperbtn")
    }

    else if(computerChance === 'rock' && playerChance === 'rock'){
                 comChoice.innerHTML = "<button>👊</button>";
                 comChoice.classList.add("rockbtn")
    }

    else if(computerChance === 'scissor' && playerChance === 'scissor'){
                 comChoice.innerHTML = "<button>✌️</button>";
                 comChoice.classList.add("scissorbtn")
    }
   }

  
   else{
    switch(playerChance){
        case 'rock':
             if(computerChance === 'scissor'){
                 result =  "You Win !" 
                 comChoice.innerHTML = "<button>✌️</button>";
                 comChoice.classList.add("scissorbtn")
            } 

            else{

            if(computerChance === 'rock'){
                 comChoice.innerHTML = "<button >👊</button>";
                 comChoice.classList.add("rockbtn")
            }
            else if(computerChance === 'paper'){

                 comChoice.innerHTML = "<button>✋</button>";
                 comChoice.classList.add("paperbtn")
            }


                 result = "You Lose";
                }
            break;
        
        case 'paper':
            if(computerChance === 'rock'){
                 result = "You Win !"
                 comChoice.innerHTML = "<button >👊</button>";
                 comChoice.classList.add("rockbtn")
            } 
            else{
                if(computerChance === 'scissor'){
                 comChoice.innerHTML = "<button>✌️</button>";
                 comChoice.classList.add("scissorbtn")
                }

                else if(computerChance === 'paper'){
                 comChoice.innerHTML = "<button>✋</button>";
                 comChoice.classList.add("paperbtn")
                }
               result =  "You Lose";
            } 
            break;
        
        case 'scissor':
            if(computerChance === 'paper'){

                result = "You Win !"
                 comChoice.innerHTML = "<button>✋</button>";
                 comChoice.classList.add("paperbtn")

            } 
            else{
                if(computerChance === 'scissor'){
                 comChoice.innerHTML = "<button>✌️</button>";
                 comChoice.classList.add("scissorbtn")

                }

                else if(computerChance === 'rock'){
                 comChoice.innerHTML = "<button>👊</button>";
                 comChoice.classList.add("rockbtn")
                }
               result =  "You Lose";
            } 

            break;
            
        }
       
    }

    

   playerDisplay.textContent = `PLAYER: ${playerChance}`;
   computerDisplay.textContent = `COMPUTER: ${computerChance}`;
   resultDisplay.textContent = result;


   switch(result){
    case "You Win !":
        resultDisplay.classList.add("greenColor");
        score.playerScore++
        playerScoreDisplay.innerText = score.playerScore;
        break;
    case "You Lose":
        resultDisplay.classList.add("redColor");
        score.computerScore++
        computerScoreDisplay.innerText = score.computerScore;
        break;
   }
    localStorage.setItem('score',JSON.stringify(score));

}
 resetbtn.addEventListener("click",function(){
    score.playerScore = 0;
    score.computerScore = 0;
 
    computerScoreDisplay.innerText = score.playerScore;
    playerScoreDisplay.innerText = score.playerScore;
    resultDisplay.innerText = "";
    comChoice.innerHTML = " ";
    comChoice.classList.remove("paperbtn","rockbtn","scissorbtn")



})