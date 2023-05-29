document.getElementById("first").className = "text-dark red";

console.log(document.getElementById("first").classList);

document.getElementById("first").classList.remove("text-dark");
document.getElementById("first").classList.add("text-dark");
document.getElementById("first").classList.toggle("text-dark");

console.log(document.getElementById("first").classList.contains("text-dark"));

