let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("Hey I am resolved");
        resolve(1);
    }, 2000);
});

promise1.then(() => {
    console.log("Congratulations this promise is now resolved");
})

promise1.then(() => {
    console.log("Hurray");
})