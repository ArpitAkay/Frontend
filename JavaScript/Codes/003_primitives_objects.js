// nn bb ss u - Primitives in Javascript
let a = null;
let b = 345;
let c = true;
let d = BigInt("345") + BigInt("5");
let e = "Arpit Kumar";
let f = Symbol("I am a nice symbol");
let g = undefined;  // let g; also give undefined only
console.log(a, b, c, d, e, f, g);
console.log(typeof(d));

// Objects in Javascript - Non-Primitives in Javascript
const item  = {
    "name": "Arpit Kumar",
    "email": "arpitkumar4000@gmail.com",
    "age": 23
}
console.log(item);
console.log(item["name"]);
console.log(item["email"]);
console.log(item["age"]);