console.log(document.getElementById("firstId").getAttribute("class"));

console.log(document.getElementById("firstId").hasAttribute("class"));
console.log(document.getElementById("firstId").hasAttribute("style"));

// console.log(document.getElementById("firstId").setAttribute("hidden", "true"));
document.getElementById("firstId").setAttribute("class", "true sachin");

document.getElementById("firstId").removeAttribute("class");

console.log(document.getElementById("firstId").attributes);

console.log(document.getElementById("firstId").dataset);
console.log(document.getElementById("firstId").dataset.game);
console.log(document.getElementById("firstId").dataset.player);