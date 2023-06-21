greet();

function greet() {
    console.log("Greetings");
}

console.log(a);

var a = 9;     // Declaration hoisted to the top but initialization is not

console.log(a);

console.log(b);

let b = 9;     // Declaration hoisted to the top but initialization is not

console.log(b);


// Function expression and class expression cannot be hoisted
greet1();

const greet = () => {
    console.log("Greetings");
}