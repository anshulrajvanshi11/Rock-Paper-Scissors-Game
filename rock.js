let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const useScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const getcompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawgame =()=>{
    console.log("game was draw");
}
 const playGame = (userChoice) =>{
console.log("user Choice =", userChoice)
const compChoice = getcompChoice();
console.log("comp choice = " , compChoice)

if(userChoice === compChoice){
    drawgame();
    msg.innerText="Draw game";
}
else{
    userWin = true;
    if(userChoice==="rock"){
        userWin = compChoice==="paper"? false : true;
    }
   else if(userChoice==="paper"){
        userWin = compChoice==="scissors"? false : true;
    }
    else{
        userWin = compChoice==="rock"? false : true;
    }
    showWinner(userWin);
}
};

const showWinner = (userWin)=>{
if(userWin){
    userScore++;
    useScorepara.innerText=userScore;
   
    msg.innerText="You win";

}
else{
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText="You loose";
    

}
}


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});