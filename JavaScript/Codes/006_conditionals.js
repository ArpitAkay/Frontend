// let age = prompt("Hey whats your age?");
// age = Number.parseInt(age); // Converting string into number
// if(age <= 0) {
//     alert("This is an invalid age");
// } else if(age < 9){
//     alert("You are a kid and you cannot even think of driving");
// } else if(age >= 9 && age <18){
//     alert("You are a kid and you can think of driving after 18");
// } else{
//     alert("You can now drive as you are above 18");
// }
// console.log("Done");

let num = 1;
switch (num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Wrong number");
        break;
}
let a = 18;
console.log("You can", a < 18 ? "Not drive" : "drive"); // Ternary Operator