alert("This game will be of 5 rounds");

let arr = ["stone", "paper", "scissor"];

let computerScore = 0;
let playerScore = 0;
let drawScore = 0;

let i = 0;
while(i < 5) {
    let computerChoise = arr[Math.floor(Math.random()*arr.length)];

    let message;

    let playerChoise = prompt("Choose any stone, paper or scissor");
    playerChoise = playerChoise.toLowerCase();

    if(playerChoise === "stone" && computerChoise === "scissor") {
        playerScore++;
        message = "Player wins this round";
    } 
    else if(playerChoise === "stone" && computerChoise === "paper") {
        computerScore++;
        message = "Computer wins this round";
    }
    else if(playerChoise === "stone" && computerChoise === "stone") {
        drawScore++;
        message = "Draw";
    }
    else if(playerChoise === "paper" && computerChoise === "scissor") {
        computerScore++;
        message = "Computer wins this round";
    }
    else if(playerChoise === "paper" && computerChoise === "paper") {
        drawScore++;
        message = "Draw";
    }
    else if(playerChoise === "paper" && computerChoise === "stone") {
        playerScore++;
        message = "Player wins this round";
    }
    else if(playerChoise === "scissor" && computerChoise === "scissor") {
        drawScore++;
        message = "Draw";
    }
    else if(playerChoise === "scissor" && computerChoise === "paper") {
        playerScore++;
        message = "Player wins this round";
    }
    else if(playerChoise === "scissor" && computerChoise === "stone") {
        computerScore++;
        message = "Computer wins this round";
    }
    else {
        alert("Please enter only stone, paper or scissor");
        continue;
    }
        
    alert("Computer Choise : " + computerChoise + "\nPlayer Choise : " + playerChoise + "\n" + message);


    if(i === 4) {
        alert("After 5 rounds" + "\nPlayer Score : " + playerScore + "\nComputer Score : " + computerScore + "\nDraw : " + drawScore)
        let playAgain = confirm("Do you want to play again?");
        if(playAgain) {
            i = 0;
            computerScore = 0;
            playerScore = 0;
            drawScore = 0;
            continue;
        }
        else {
            alert("Bye Bye Tata Khatam Gaya");
        }
    }

    i++;
}