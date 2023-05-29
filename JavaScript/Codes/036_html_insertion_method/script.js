// First method
// let elem = document.getElementsByTagName("div")[0];

// elem.innerHTML = elem.innerHTML + "<h1>Hello World!</h1>";

// Second Method
let divElement = document.createElement("div");
divElement.innerHTML = "<h1>Hello World!!</h1>";

let elem = document.getElementsByTagName("div")[0];
// elem.append(divElement);
// elem.appendChild(divElement);
// elem.prepend(divElement);
// elem.before(divElement);
// elem.after(divElement);

elem.replaceWith(divElement);