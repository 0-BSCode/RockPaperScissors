function computerPlay() {
    var choices = ["Rock", "Paper", "Scissors"];
    var choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    let p_play = document.getElementById("Player");
    let p_comp = document.getElementById("Computer");
    let p_res = document.getElementById("Result");
    p_play.textContent = "Player: " + playerSelection;
    p_comp.textContent = "Computer: " + computerSelection;
    // console.log("Player: " + playerSelection);
    // console.log("Computer: " + computerSelection);
    if (playerSelection === computerSelection) {
        // p_res.textContent = "Draw!";
        return 0;
        // console.log("Draw!");
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")){
        // p_res.textContent = "Player Wins!";
        return 1;
        // console.log("Player Wins!");
    } else {
        // p_res.textContent = "Computer Wins!";
        return 2;
        // console.log("Computer Wins!");
    }
    // console.log("\n");
}
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
            // console.log("Invalid weapon!");
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

main();
/*let p_score=0, c_score=0, points=5;
let count = 0;
function printText(elem){
    console.log(elem.textContent);
    count++;
    console.log(count);
    let output = playRound(elem.textContent, computerPlay());
    if (output === 1){
        p_score++;
    } else if (output === 2){
        c_score++;
    }
    document.getElementById("Result").textContent = "Player: "+ p_score + "\t"+"Computer: "+ c_score;
    if (p_score == points){
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
    if (count === 5){
        document.getElementById("container").style.display = "none";
    }
}*/