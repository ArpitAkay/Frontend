// Chapter8 - Q2
let google = document.getElementById("google");
let facebook = document.getElementById("facebook");
let twitter = document.getElementById("twitter");

google.addEventListener("click", function(e) {
    let url = "https://www.google.com";
    window.location = url;
})

facebook.addEventListener("click", function(e) {
    let url = "https://www.facebook.com";
    window.location = url;
})
twitter.addEventListener("click", function(e) {
    let url = "https://www.twitter.com";
    window.location = url;
})


// Chapter8 - Q4
const fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json();
    return a;
}

setInterval(async function() {
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    console.log(await fetchContent(url));
}, 2000);


setInterval(function() {
    let bulb = document.getElementsByClassName("bulb-container")[0];
    bulb.classList.toggle("bulb"); 
}, 200);