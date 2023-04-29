let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b : " + average(a, b))
console.log("Average of b and c : " + average(b, c))
console.log("Average of c and a : " + average(c, a))

// Simple function
function average(num1, num2) {
    console.log("Done")
    return (num1 + num2)/2;
}

// Arrow function
const sum = (p, q) => {
    return p + q;
}
let s = sum(9, 7);
console.log(s);

const helloMessage = () => {
    console.log("Hey, how are you?");
}
helloMessage();