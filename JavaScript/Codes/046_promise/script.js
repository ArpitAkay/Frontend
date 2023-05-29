let promise = new Promise(function(resolve, reject) {
    alert("I am an alert in promise");
    resolve(56);
});

console.log("Hello One");

setTimeout(function() {
    console.log("Hello Two in 2 seconds");
}, 2000);

console.log("My name is Hello Three");
console.log(promise);