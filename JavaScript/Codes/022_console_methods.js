console.log(console);
console.log("Hello");
console.log("This is error");
console.assert(555>52);
// console.clear();

let obj = {
    "a": 1,
    "b": 2,
    "c": 3
};
console.table(obj);

console.warn("This is warning");
console.info("This is an important information");
console.time("a");
console.timeEnd("a");

console.time("forloop");
for(let i=0; i<5; i++) {
    console.log(i);
}
console.timeEnd("forloop");

console.time("whileloop");
let i=0;
while(i<5) {
    console.log(i);
    i++;
}
console.timeEnd("whileloop");

console.time("dowhileloop");
let i1=0;
do {
    console.log(i1);
    i1++;
} while(i1<5)
console.timeEnd("dowhileloop");