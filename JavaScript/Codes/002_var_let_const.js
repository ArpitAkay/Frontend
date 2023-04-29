var a = 45;
var b = "Arpit Kumar";
var c = null;
var d = undefined;

{
    var b = "this";
    console.log(b);
    let a = 24;
    console.log(a); 
}
console.log(b);
console.log(a); 

const e = 31;
console.log(e);

var f;
let g;
const h = 44;
console.log("var : " + f + " let : " + g + " const : " + h);    // Output -> var : undefined let : undefined const : 44