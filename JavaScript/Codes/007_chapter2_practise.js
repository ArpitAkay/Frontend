// Chapter2 - Q1
let age = 10;
if(age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20");
}
else {
    console.log("Your age does not lies between 10 and 20");
}

//Chapter2 - Q2
let num = 1;
switch(num) {
    case 1 :
        console.log("Number is one");
        break;
    case 2 :
        console.log("Number is two");
        break;
    default :
        console.log("Wrong Input");
}

//Chapter2 - Q3
let num2 = 12;
if(num2%2 == 0 && num2%3 == 0) {
    console.log("Number is divisible by 2 and 3");
} else {
    console.log("Number is not divisible by 2 and 3")
}

//Chapter2 - Q4
let num3 = 5;
if(num3%2 == 0 || num3%3 == 0) {
    console.log("Number is divisible by 2 or 3");
} else {
    console.log("Number is not divisible by 2 or 3")
}

//Chapter2 - Q5
let age2 = 19;
age2 > 18 ? console.log("You can drive") : console.log("You cannot drive");