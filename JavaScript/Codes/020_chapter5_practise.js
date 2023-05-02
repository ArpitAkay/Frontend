// Chapter5 - Q1
// let numbers = [1, 2, 3, 4, 5];
// let num = prompt("Enter any number");
// num = Number.parseInt(num);
// numbers.push(num);
// alert("Your array is : " + numbers);

// Chapter5 - Q2
// let numbers = [1, 2, 3, 4, 5];

// let num;
// do {
//     num = prompt("Enter any number");
//     num = Number.parseInt(num);
//     numbers.push(num);
//     alert("Your array is : " + numbers);
// } while(num != 0);

// Chapter5 - Q3
let numbers = [10, 22, 33, 44, 50];

let newArray = numbers.filter((value) => {
    return value%10 == 0;
});
console.log(newArray)

// Chapter5 - Q4
let numbers2 = [1, 2, 3, 4, 5];

let newArray2 = numbers2.map((value) => {
    return value * value;
});
console.log(newArray2)

// Chapter5 - Q5
let numbers3 = [1, 2, 3, 4, 5];

let result = numbers3.reduce((value1, value2) => {
    return value1 * value2;
})
console.log(newArray3, typeof(newArray3));