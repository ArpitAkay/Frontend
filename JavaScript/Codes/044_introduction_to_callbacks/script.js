// Synchronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " +  c + " favorite color.");

// Asynchronous programming
// console.log("start");
// setTimeout(function() {
//     console.log("Hey I am good");
// }, 3000);
// console.log("end");


// Callbacks functions
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with src : " + src);
        callback(null, src);
    }
    script.onerror = function() {
        console.log("Error loading script with src : " + src);
        callback(new Error("Src got some error"), src);
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if(error) {
        console.log(error);
    }

    alert("Hello " + src);
}

function goodMorning(error, src) {
    if(error) {
        console.log(error);
    }

    alert("Good morning " + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello);