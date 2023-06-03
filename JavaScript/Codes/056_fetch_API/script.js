// AJAX Asynchronous JavaScript and XML
let promise = fetch("https://api.chucknorris.io/jokes/random");

promise.then((response) => {
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers)

    return response.json();
}).then((response) => {
    console.log(response);
    console.log(typeof(response));
})