let a = {
    "name2": "Arpit Kumar",
    "language": "JavaScript",
    run: () => {
        alert("self run");
    }
}

console.log(a);
console.log(a.toString());
console.log(a.valueOf());

let p = {
    run: () => {
        alert("run");
    }
}
console.log(p);

p.__proto__ = {
    "name": "Jackie"
}

a.__proto__ = p;
// p.__proto__ = a;

console.log("a.name : " + a.name);
// console.log("p.language : " + p.language);

a.run();