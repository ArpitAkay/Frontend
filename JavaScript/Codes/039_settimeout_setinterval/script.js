document.write("Hello");

// setTimeout
let timerId = setTimeout(function() {
    alert("I am inside of settimeout");
}, 5000);

let permission = prompt("Do you want to run setTimeout? (yes/no)");
if(permission.toLowerCase() === "no") {
    clearTimeout(timerId);
}

console.log("timerId : " + timerId);

const sum = (a, b) => {
    console.log("Yes i am running");
    console.log(a+b);
}

setTimeout(sum, 1000, 1, 2);


// setInterval

let timerId2 = setInterval(function() {
    alert("I am inside of setInterval")
}, 2000);

setInterval(sum, 2000, 1, 4);

clearInterval(timerId2);