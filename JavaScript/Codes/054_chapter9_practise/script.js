const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        
        script.onload = function() {
            resolve(true);
        }
        
        script.onerror = function() {
            reject(new Error("Something went wrong"));
        }
    });
}

//Chapter9 - Q1
let promise = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");

promise.then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err);
});


//Chapter9 - Q2
const main = async () => {
    console.log(new Date().getMilliseconds());
    
    let promise = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
    console.log(promise);
    
    console.log(new Date().getMilliseconds());
}

main();

//Chapter9 - Q3
const p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 3000);
    });
}

const main2 = async () => {
    try {
        let promise2Value = await p();
    }
    catch(err) {
        console.log(err.message);
    }
}

main2();

//Chapter9 - Q4
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 3000);
    });
}

const run = async () => {
    console.time("run");
    let promise1 = await p1();
    let promise2 = await p2();
    let promise3 = await p3();
    console.log(promise1, promise2, promise3);
    console.timeEnd("run");

    console.time("run2");
    let promise_all = await Promise.all([p1(), p2(), p3()]);
    console.log(promise_all);
    console.timeEnd("run2");
}

run();