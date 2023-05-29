console.log(document.getElementsByTagName("span")[0]);
console.dir(document.getElementsByTagName("span")[0]);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

// innerHTML - innerHTML is valid only for element nodes 
console.log(document.getElementById("first").innerHTML);
document.getElementById("first").innerHTML = "<i>Hey i am italic</i>";

// outerHTML
console.log(document.getElementById("first").outerHTML);
document.getElementById("first").outerHTML = '<div id="first">Hey How are you?</div>';

console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

// textContent
console.log(document.body.textContent);

document.getElementById("first").hidden = true; 