let num = [1, 2, 3, 4, 5];
console.log(num);

// delete
delete num[0];  // length of the array remain same even after delete operator
console.log(num);

// concat
let num2 = [6, 7, 8, 9, 10];
let num3 = [11, 12, 13, 14, 15];
let newArray = num.concat(num2, num3);
console.log(newArray);

// sort
let num4 = [22, 24, 11, 0, 2];
num4.sort();    // sort alphabetically
console.log(num4);

let compare = (a, b) => {
    return a - b;
}

num4.sort(compare);
console.log(num4);

// reverse
num4.reverse();
console.log(num4);

// splice
let num5 = [1, 2, 3, 4, 5];
let deletedValues = num5.splice(2, 3, 1021, 1022, 1023);
console.log(deletedValues);
console.log(num5);

// slice
let num6 = [1, 2, 3, 4, 5];
let newArray2 = num6.slice(2, num6.length);
console.log(num6);
console.log(newArray2);