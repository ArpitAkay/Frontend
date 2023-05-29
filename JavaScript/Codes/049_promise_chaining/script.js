let promise1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log("Resolved after 2 seconds");
        resolve(true);
    }, 2000);
});

promise1.then(function(value) {
    console.log(value);

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("Promise2");
        }, 2000);
    });

    return promise2;
}).then(function(value) {
    console.log(value);
    return 2;   // Javascript will make it a promise immediately with resolve value 2
}).then((value) => {
    console.log(value);
})