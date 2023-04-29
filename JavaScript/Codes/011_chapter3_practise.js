// Chapter3 - Q1
let marks = {
    "harry": 98,
    "rohan": 70,
    "aakash": 7
};

console.log(Object.keys(marks));    // Output - [ 'harry', 'rohan', 'aakash' ]
console.log(Object.values(marks));  // Output - [ 98, 70, 7 ]

for(let i=0; i<Object.keys(marks).length; i++) {
    console.log("Marks of " + Object.keys(marks)[i] + " are " + Object.values(marks)[i]);
}

// Chapter3 - Q2
for(let key in marks) {
    console.log("Marks of " + key + " are " + marks[key]);
}

// Chapter3 - Q3
// while(true) {
//     let num = prompt("Please enter 4");
//     num = Number.parseInt(num);
//     if(num === 4) {
//         alert("Congrats your enter the right number");
//         break;
//     }
//     else {
//         alert("Please try again");
//     }
// }

//Chapter3 - Q4
const mean = (num1, num2, num3, num4) => {
    return (num1 + num2 + num3 + num4)/4;
}

let m = mean(2, 4, 6, 8);
console.log(m);