setTimeout(function() {
    console.log("A")
}, 1000);

try {       // try-catch works synchronously
    console.log(a);
} catch(error) {
    console.log(error.message)
}

setTimeout(function() {
    console.log("B")
}, 2000);

setTimeout(function() {
    console.log("C")
}, 3000);

setTimeout(function() {
    console.log("D")
}, 4000);