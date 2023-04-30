let num = [1, 2, 3, 4, 5];

// for loop
for(let i=0; i<num.length; i++) {
    console.log(num[i]);
}

// for-each loop
num.forEach((e) => {
    console.log(e * e);
})

// Array.from
let fullName = "Arpit Kumar";
let arr = Array.from(fullName);
console.log(arr);

// for-of loop
for(let value of arr) {
    console.log(i);
}

// for-in loop
for(let index in arr) {
    console.log(i);
}