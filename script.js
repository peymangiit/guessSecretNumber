"use strict"

// texts
const numberEl = document.querySelector(".number");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector("#score");
const highscoreEl = document.querySelector("#highscore");
// buttons
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");

let secretNumber = Math.ceil(Math.random()*20);
let score = 20;
let highscore = 0;
console.log(secretNumber);

// functions
function checkNmber(){
    const guess = Number (document.querySelector("#guess").value);

    // win game
    if(guess == secretNumber){
        messageEl.textContent = "🔅 currect answer!!";
        numberEl.style.width = `220px`;
        numberEl.textContent = `${secretNumber}`;
        document.querySelector("body").style.backgroundColor = "green";
        highscoreEl.textContent = `${highscore<score ? highscore=score : highscore}`;
    }
    // guess wrong
    if(guess !==secretNumber){
        if(score>1){
            messageEl.textContent = `${guess < secretNumber? "📉 Too Low" : "📈 Too High"}`;
            score--;
            scoreEl.textContent = `${score}`;

        }
    }
}
function reset(){
    numberEl.textContent = "?";
    messageEl.textContent = "start guessing ..."
    score = 20;
    scoreEl.textContent = "20"
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("#guess").value = "";
    secretNumber = Math.ceil(Math.random()*20);
}

btnCheck.addEventListener("click",checkNmber);
btnAgain.addEventListener("click" , reset);
