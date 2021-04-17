function main() {
    let points = prompt("First to how many points?");
    let p_score=0, c_score=0;
    while ((p_score < points) && (c_score < points)){
        let player = "";
        while (true){
            player = prompt("Weapon of choice: ");
            let playerChoice = player.slice(0, 1).toUpperCase() + player.slice(1);
            if ((playerChoice === "Rock") || (playerChoice === "Paper") || (playerChoice === "Scissors")){
                player = playerChoice;
                break;
            }
            document.getElementById("Result").textContent = "Invalid weapon!";
        }
        let output = playRound(player, computerPlay());
        if (output === 1){
            p_score++;
        } else if (output === 2){
            c_score++;
        }
        document.getElementById("Result").textContent = "Player: "+ p_score + "\t"+"Computer: "+ c_score;
    }
    if (p_score == points){
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
}

let points = prompt("First to how many points?");
let p_score=0, c_score=0;
let container = document.getElementById("container");
let final = document.getElementById("Result");
let p_play = document.getElementById("Player");
let p_comp = document.getElementById("Computer");
let count = document.getElementById("counter");
let r_start = document.getElementById("restart");
let round_res = document.getElementById("round");
final.style.display = "none";

function computerPlay() {
    var choices = ["Rock", "Paper", "Scissors"];
    var choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    // p_play.textContent = "Player: " + playerSelection;
    // p_comp.textContent = "Computer: " + computerSelection;
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
    final.style.display="block";
    if (winner === 1){
        final.textContent = "Player Wins!";
    } else {
        final.textContent = "Computer Wins!";
    }
    container.style.display = "none";
    container.disabled = true;
    p_play.style.display = "none";
    p_comp.style.display = "none";
    round_res.style.display = "none";
    r_start.style.display = "block";
}


function printText(elem){
    let output = playRound(elem.textContent.trim(), computerPlay().trim());
    console.log(output);
    if (output === 1){
        p_score++;
    } else if (output === 2){
        c_score++;
    }
    p_play.textContent = "Player: " + p_score;
    p_comp.textContent = "Computer: " + c_score;
    console.log(p_score, c_score, points);
    if (p_score == points){
        showResults(1);
    } else if (c_score == points){
        showResults(0);
    }
}

