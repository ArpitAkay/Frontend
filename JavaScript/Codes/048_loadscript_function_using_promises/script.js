function loadScript(src) {
    let promise = new Promise((resolve, reject) => {

        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
    
        script.onload = function() {
            resolve(true);
        }
    
        script.onerror = function() {
            let msg = "Some error occured in src : " + src;
            reject(new Error(msg));
        }
    });

    return promise;
}

let promise = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");

promise.then(function(value) {
    console.log(value);

    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
}).then(function(value) {
    console.log(value);
}).catch(function(error) {
    console.log(error.message);
})

