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
let score = 5;
scoreEl.textContent = `${score}`
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
        btnCheck.disabled = true
    }
    // guess wrong
    if(guess !==secretNumber){
        if(score>1){
            messageEl.textContent = `${guess < secretNumber? "📉 Too Low" : "📈 Too High"}`;
            score--;
            scoreEl.textContent = `${score}`;
        }
        else{
            messageEl.textContent = `😥 You couldn't guess `;
            scoreEl.textContent = `${--score}`
            document.querySelector("body").style.backgroundColor = "red";
            btnCheck.disabled = true
        }
    }
}
function reset(){
    btnCheck.disabled = false;
    numberEl.textContent = "?";
    messageEl.textContent = "start guessing ..."
    score = 10;
    scoreEl.textContent = `${score}`
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("#guess").value = "";
    secretNumber = Math.ceil(Math.random()*20);
}

btnCheck.addEventListener("click",checkNmber);
btnAgain.addEventListener("click" , reset);
