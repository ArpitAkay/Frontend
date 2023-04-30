let fullName = "Arpit Kumar";
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.slice(2, 4));
console.log(fullName.slice(2));
console.log(fullName.replace("Kumar", "Kummar"));

let name1 = "Arpit";
let name2 = " Kumar";
console.log(name1.concat(name2, " is a good boy"));

let friend = "   Meena    ";
console.log(friend.trim());

let str = "This is a String";

for(let i=0; i<str.length; i++) {
    console.log(str[i]);
}