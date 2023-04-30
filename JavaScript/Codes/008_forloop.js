// for loop
let sum = 0;
for(let i=0; i<10; i++) {
    sum += (i+1);
}
console.log("sum : " + sum);

// for-in loop
let marks = {
    "Arpit": 45,
    "Yashrah": 51,
    "Ayush": 52,
    "Krishna": 45
}

// for-in loop
for(let mark in marks) {
    console.log("Marks of " + mark + " is " + marks[mark]);
}

// for-of loop
for(let character of "Arpit") {
    console.log(character);
}