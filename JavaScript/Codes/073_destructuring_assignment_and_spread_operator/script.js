//Destructing
let arr = [3, 5, 8, 9, 12, 14];
let [a, b, c, d, ...rest] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(rest);

let [e, , , ...rest2] = arr;
console.log(e);
console.log(rest2);

const obj = {
    "f": 1,
    "g": 2,
}

const {f, g} = obj;
console.log(f);
console.log(g);

//Spread operator
let arr1 = [2, 3, 4];
let obj1 = {...arr1};
console.log(obj1);

function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}

console.log(sum(...arr1));

let obj2 = {
    "name": "Arpit Kumar",
    "company": "Company xyz",
    "address": "xyz"
}
console.log({ ...obj2, name: "John", company: "abc"});
console.log({name: "John", company: "abc", ...obj2});   // This will print obj2 object without changing any value