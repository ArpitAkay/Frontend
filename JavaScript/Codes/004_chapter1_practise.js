// Chapter1 - Q1
let str = "20";
let number = 10;
console.log(str + number);

// Chapter1 - Q2
console.log(typeof(str + number));

// Chapter1 - Q3
const item  = {
    "name": "Arpit Kumar",
    "email": "arpitkumar4000@gmail.com"
}
console.log(item);
// item = 34;   // will give error
console.log(item);

// Chapter1 - Q4
item['password'] = "password1234";
console.log(item);
item['name'] = "Arpit";
console.log(item);

// Chapter1 - Q5
const dictionary = {
    "appreciate": "recognize the full worth of.",
    "subtle": "(especially of a change or distinction) so delicate or precise as to be difficult to analyse or describe.",
    "definitely": "without doubt (used for emphasis).",
    "fickle": "changing frequently, especially as regards one's loyalties or affections.",
    "grateful": "feeling or showing an appreciation for something done or received."
}
console.log(dictionary);
console.log(dictionary.appreciate);
console.log(dictionary.subtle);