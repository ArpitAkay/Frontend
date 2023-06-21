//Chapter12 - Q1
const print = (text) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    });

    return promise;
}

(async () => {
    let value1 = await print("Hello");
    console.log(value1);
    let value2 = await print("World");
    console.log(value2);
})()

//Chapter12 - Q2
const average = (...arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    return sum/arr.length;
}

console.log(average(1,2,3,4,5,6,7,8,9,10));

//Chapter12 - Q3
const resolvePromise = (n=2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n);
        }, n * 1000);
    });
}

(async () => {
    let response = await resolvePromise(10);
    console.log(response);
})()

//Chapter12 - Q4
function simpleInterest(p, r, t) {
    return p * r * t / 100;
}

console.log(simpleInterest(1000, 5, 1));
