let promise1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Value 1");
    }, 11000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        // resolve("Value 2");
        reject(new Error("Error"));
    }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Value 3");
    }, 3000);
});

// promise1.then((value) => {
//     console.log(value);
// });

// promise2.then((value) => {
//     console.log(value);
// });

// promise3.then((value) => {
//     console.log(value);
// });

// all
let promise_all = Promise.all([promise1, promise2, promise3]);
promise_all.then((value) => {
    console.log(value);
});


// allSettled
let promise_allSettled = Promise.allSettled([promise1, promise2, promise3]);
promise_allSettled.then((value) => {
    console.log(value);
});

// race
let promise_race = Promise.race([promise1, promise2, promise3]);
promise_race.then((value) => {
    console.log(value);
});

// any
let promise_any = Promise.any([promise1, promise2, promise3]);
promise_any.then((value) => {
    console.log(value);
});

// resolve
let promise_resolve = Promise.resolve(6);
promise_resolve.then((value) => {
    console.log(value);
});

// reject
let promise_reject = Promise.reject(new Error("Hey"));
promise_reject.catch((error) => {
    console.log(error.message);
});

