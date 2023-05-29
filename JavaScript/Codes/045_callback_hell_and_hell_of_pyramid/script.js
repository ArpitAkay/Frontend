// Synchronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " +  c + " favorite color.");

// Asynchronous programming
// console.log("start");
// setTimeout(function() {
//     console.log("Hey I am good");
// }, 3000);
// console.log("end");


// Callbacks functions
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with src : " + src);
        callback(null, src);
    }
    script.onerror = function() {
        console.log("Error loading script with src : " + src);
        callback(new Error("Src got some error"), src);
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if(error) {
        console.log(error);
    }

    alert("Hello " + src);
}

function goodMorning(error, src) {
    if(error) {
        console.log(error);
        sendEmergencyMessage();
        return;
    }

    alert("Good morning " + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", goodMorning);


// Callback hell or pyramid of doom
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
        if (error) {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                        console.log(error)
                        sendEmergencyMessageToCeo();
                        return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                        if (error) {
                                console.log(error)
                                sendEmergencyMessageToCeo();
                                return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                                if (error) {
                                        console.log(error)
                                        sendEmergencyMessageToCeo();
                                        return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                        if (error) {
                                                console.log(error)
                                                sendEmergencyMessageToCeo();
                                                return
                                        }
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                                if (error) {
                                                        console.log(error)
                                                        sendEmergencyMessageToCeo();
                                                        return
                                                }
                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                        if (error) {
                                                                console.log(error)
                                                                sendEmergencyMessageToCeo();
                                                                return
                                                        }
                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                                if (error) {
                                                                        console.log(error)
                                                                        sendEmergencyMessageToCeo();
                                                                        return
                                                                }
                                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
})