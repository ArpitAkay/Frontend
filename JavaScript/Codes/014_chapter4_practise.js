// Chapter4 - Q1
console.log("Har\"".length);

// Chapter4 - Q2
let str = "This is a String";
console.log(str.includes("This"));
console.log(str.startsWith("This"));
console.log(str.endsWith("String"));

// Chapter4 - Q3
let str2 = "This is a second String";
console.log(str2.toLowerCase());

// Chapter4 - Q4
let str3 = "Please give Rs 1000";
let amount = str3.slice(15, str3.length);
amount = Number.parseInt(amount);
console.log(typeof(amount))

// Chapter5 - Q5
let friend = "Yashraj Anand";
friend[1] = "A";    // This is not possible but does not give the error
console.log(friend);
