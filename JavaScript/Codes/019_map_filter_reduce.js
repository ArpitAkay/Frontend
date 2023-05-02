// Higher order array methods
let arr = [45, 23, 21];
console.log(arr);

// map
let newArray = arr.map((value, index, arr) => {
    console.log(value, index, arr); 
    return value + index;
})
console.log(newArray);

// filter
let arr2 = [45, 23, 21, 0, 3, 5];
let newArray2 = arr2.filter((value) => {
    return value < 10;
});
console.log(newArray2);

// reduce
let arr3 = [1, 2, 3, 4, 5];
let newArray3 = arr3.reduce((value1, value2) => {
    return value1 + value2;
})
console.log(newArray3);
