let arr = [1, 2, 3, 4, 5, null, false, "Not present", {"name": "Arpit Kumar"}];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// length
console.log(arr.length);

// adding a new value to the array
arr[9] = 98;
console.log(arr);

// change the value of an array
arr[1] = 92.2;
console.log(arr);

console.log(typeof(arr));

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

