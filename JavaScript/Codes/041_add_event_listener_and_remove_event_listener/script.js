let btn = document.getElementById("btn");

let x = function(e) {
    console.log(e.target);
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.clientX, e.clientY);
    alert("Hello World1");
}

let y = function(e) {
    alert("Hello World2");
}

btn.addEventListener("click", x);

btn.addEventListener("click", y);

let permission = prompt("What is favorite number?");
permission = Number.parseInt(permission);
if(permission === 2) {
    btn.removeEventListener("click", y);
}