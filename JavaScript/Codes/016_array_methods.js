let numbers = [1, 2, 3, 4, 5];
console.log(numbers)

// toString
let b = numbers.toString();
console.log(b, typeof(b));

// join
let c = numbers.join("_");
console.log(c, typeof(c));

// pop
let poppedNumber = numbers.pop();    // pop returns the popped element
console.log(poppedNumber);
console.log(numbers);

// push
let newLength = numbers.push(100);   // push returns the new array length
console.log(newLength);
console.log(numbers);

// shift
let shiftedNumber = numbers.shift(); // removes an element from the start of the array
console.log(shiftedNumber);
console.log(numbers);

// unshift
let newLength2 = numbers.unshift(1)  // add an element in the start of the array
console.log(newLength2);
console.log(numbers);