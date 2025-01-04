let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game Was Draw. Play Again"; 
    msg.style.backgroundColor = "#081b31";


}
const showWinner = (userWin,userChoice,CompChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        ComputerScore++;
        compScorePara.innerText = ComputerScore;
        msg.innerText = `You lose! ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{

 const CompChoice = genComputerChoice();

 if(userChoice===CompChoice){
    //draw game
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = CompChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
       //rock,scissors
       userWin = CompChoice === "scissors" ? false : true;
    }
    else{
        //rock,paper
        userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,CompChoice);
}
}
choices.forEach((choice) =>{
   choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
   })
});
