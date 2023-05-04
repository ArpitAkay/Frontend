// Chapter6 - Q1    
let age = prompt("Enter your age");
age = Number.parseInt(age);

let message = age > 18 ? "You can drive" : "You cannot drive";
alert(message);

// Chapter6 - Q2
let runAgain = true;
while(runAgain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);

    let message = age > 18 ? "You can drive" : "You cannot drive";
    alert(message);

    runAgain = confirm("Do you want to play again");
}

// Chapter6 - Q3
let runAgain1 = true;
while(runAgain1) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);

    if(age < 1) {
        runAgain1 = false;
        console.error("Please enter a valid age");
    } else { 
        let message = age > 18 ? "You can drive" : "You cannot drive";
        alert(message);
    }

    runAgain1 = confirm("Do you want to play again");
}

// Chapter6 - Q4
let num = prompt("Enter any number");
num = Number.parseInt(num);

if(num > 4) {
    location.href="https://google.com/";
}

// Chapter6 - Q5
let color = prompt("Enter the page background color");

document.body.style.backgroundColor=color;