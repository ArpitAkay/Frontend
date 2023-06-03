console.log(document.cookie);
document.cookie = "Name1=Arpit Kumar"
document.cookie = "Name2=Ayush Agrawal"
console.log(document.cookie);

document.cookie = "Name2=Yashraj Anand"
console.log(document.cookie);

let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);

document.cookie = "Name3=KrishnaViswakarma; path=/a; expires=Tue, 06 June 2023 12:00:00 GMT";
console.log(document.cookie);