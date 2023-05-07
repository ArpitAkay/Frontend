// accessing first child
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.hasChildNodes);

// convert NodeList into Array
let arr = Array.from(document.body.childNodes);
console.log(typeof(arr));