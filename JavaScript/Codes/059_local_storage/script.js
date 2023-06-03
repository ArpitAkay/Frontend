// Both key and value should be String in localStorage
localStorage.setItem("Name", "Arpit Kumar");
localStorage.setItem("Age", "23");
let name = localStorage.getItem("Name");
console.log(name);

// localStorage.removeItem("Name");
// localStorage.clear();

let length = localStorage.length;
console.log(length);

let key = localStorage.key(0);
console.log(key);

// Other Syntax
localStorage.one = 1;
alert(localStorage.one);
delete localStorage.one;