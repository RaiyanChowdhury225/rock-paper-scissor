let playerScore=0
let computerScore=0
let roundResult=document.getElementById("round-result")
let score=document.getElementById("score");

function getcomputerChoice(){
    const choices=['rock','paper','scissors']
    const random=Math.floor(Math.random()*3)
    return choices[random]
}

function playRound(player,computer){
    if (player===computer) 
        return "tie";
    const playerwins=
    (player==="rock" && computer==="scissors")||
    (player==="paper" && computer==="rock")||
    (player==="scissors" && computer==="paper");

    return playerwins ? "player":"computer";
}

let buttons=document.querySelectorAll('[data-choice]');

for (let i=0;i<buttons.length;i++){
    let button=buttons[i];
    button.addEventListener('click',function(){
        let playerChoice=button.getAttribute('data-choice');
        let computerChoice=getcomputerChoice();
        let result=playRound(playerChoice,computerChoice);

        if (result==="player"){
            playerScore++;
        }else if (result==="computer"){
            computerScore++;
        }

        roundResult.textContent="You "+ playerChoice+ ",computer "+computerChoice + ". result" + result
        score.textContent="Player"+playerScore+" Computer"+computerScore;


        if (playerScore === 5) {
            roundResult.textContent = " You won the whole game!";
        } else if (computerScore === 5) {
            roundResult.textContent = " Computer won the whole game!";
        }
 
        

    });
}




 


