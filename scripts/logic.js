let points;
do {
    points = prompt("First to how many points?");
} while (points < 1 || isNaN(parseInt(points)));

let p_score=0, c_score=0;
let p_play = document.getElementById("player");
let p_comp = document.getElementById("computer");
const choices = document.querySelectorAll(".card_p");
const c_choices = document.querySelectorAll(".card_c");
let round_res = document.getElementById("border");

const endContainer = document.createElement("div");
endContainer.classList.add("end-card");

const restartBtn = document.createElement("button");
restartBtn.classList.add("restart");
restartBtn.addEventListener("click", ()=>window.location.reload());
restartBtn.textContent = "Try again?";

const endText = document.createElement("p");
endText.style.textAlign = "center";
endText.style.fontFamily = 'Times New Roman', 'sans-serif';
endText.style.fontSize = "50px";


function computerPlay() {
    var choices = ["Rock", "Paper", "Scissors"];
    var choice = Math.floor(Math.random()*choices.length);
    var output = choices[choice];
    for (let i=0; i<c_choices.length; i++){
        if (c_choices[i].classList.contains("is-active")){
            c_choices[i].classList.remove("is-active")
        } 
        if (c_choices[i].getAttribute('id') === output){
            c_choices[i].classList.add("is-active");
        }
    }
    return output;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        round_res.textContent = "Draw";
        return 0;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")){
        round_res.textContent = "You win!";
        return 1;
    } else {
        round_res.textContent = "You lose!";
        return 2;
    }
}

function showResults(winner) {
    const body = document.querySelector("body");
    body.innerHTML = '';
    if (winner === 1){
        endText.textContent = "Player Wins!";
    } else {
        endText.textContent = "Computer Wins!";
    }
    endContainer.appendChild(endText);
    endContainer.appendChild(restartBtn);
    body.appendChild(endContainer);
}

function printText(elem){
    let choice = elem.getAttribute("data-value");
    let output = playRound(choice, computerPlay().trim());
    if (output === 1){
        p_score++;
    } else if (output === 2){
        c_score++;
    }
    p_play.textContent = "Player Score: " + p_score;
    p_comp.textContent = "Computer Score: " + c_score;
    if (p_score == points){
        showResults(1);
    } else if (c_score == points){
        showResults(0);
    }
}

choices.forEach((key) => key.addEventListener("click", ()=>printText(key)));