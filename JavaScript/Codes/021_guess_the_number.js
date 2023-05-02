let randomNumber = Math.floor(Math.random() * 100) + 1; // range 1 and 100
console.log(randomNumber);

let guessCount = 0;
while(true) {
    let inputNumber = prompt("Guess the number between 1 and 100");
    inputNumber = Number.parseInt(inputNumber);
    guessCount++;
    if(inputNumber > 100) {
        alert("Enter the number below 100");
    }
    else if(inputNumber == randomNumber) {
        alert("Random number is : " + randomNumber +  " and your score is : " + (100 - guessCount));
        break;
    }
    else if(inputNumber > randomNumber) {
        alert("Try again, random number is smaller than " + inputNumber);
    }
    else if(inputNumber < randomNumber) {
        alert("Try again, random number is greater than " + inputNumber);
    }
}