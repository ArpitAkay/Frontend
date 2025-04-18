let a = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456);
        }, 4000);
    });

    return promise;
}

(async () => {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})();