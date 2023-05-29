let promise1 = new Promise(function(resolve, reject) {
    console.log("Promise is pending");
    setTimeout(function() {
        // console.log("I am a promise and i am fulfilled");
        resolve(true);
    }, 5000);
})


let promise2 = new Promise(function(resolve, reject) {
    console.log("Promise is pending");
    setTimeout(function() {
        // console.log("I am a promise and i am rejected");
        reject(new Error("I am an error"));
    }, 5000);
})

console.log(promise1);
console.log(promise2);

// To get the value
promise1.then(function(value) {
    console.log(value);
})

// To catch the error
promise2.catch(function(error) {
    console.log("Some error occured in promise2");
})

promise2.then(function(value) {
    console.log(value);
}, function(error) {
    console.log(error);
})