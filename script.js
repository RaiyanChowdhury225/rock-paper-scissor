function computerChoice(){
    let num=Math.floor(Math.random() * 3);
    if (num===0){
        return "rock";
    }else if(num===1){
        return "paper";
    }else if(num===2){
        return "scissor";
    }
}
function playerChoice(){
    let player=prompt("Choose one:Rock,paper or scissor")
    player=player.toLowerCase()
    return player

}
let playerScore=0;
let computerScore=0;

function round(computerChoice,humanchoice){
    if(humanchoice===computerChoice){
        return "Tie!No one one";
    }else if(humanchoice=="rock" && computerChoice=="scissor"||
             humanchoice=="paper" && computerChoice=="rock"||
             humanchoice=="scissor" && computerChoice=="paper"){
                playerScore+=1
                return `Congratulations! ${humanchoice} beats ${computerChoice}`
            }else{
                computerScore+=1
                return `Sorry! ${computerChoice} beats ${humanchoice}`

            }
}

;
function playGame(){
    for(let i=1;i<=5;i++){
         let human = playerChoice();
         let computer = computerChoice()
         console.log(`round ${i}`)
         console.log(round(human,computer))
         console.log(`Scores -> Player: ${playerScore}, Computer: ${computerScore}`);
    }


}

playGame()
    




 


