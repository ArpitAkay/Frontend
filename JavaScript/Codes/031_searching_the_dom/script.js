// getElementById
let cardTitle = document.getElementById("firstcardtitle");
console.log(cardTitle);
cardTitle.style.color = "Red";

// querySelectorAll
let cardTitles = document.querySelectorAll(".card-title");
console.log(cardTitles);
cardTitles[0].style.color = "blue";
cardTitles[1].style.color = "red";
cardTitles[2].style.color = "green";

// querySelector
let cardTitle2 = document.querySelector(".card-title");
console.log(cardTitle2);
cardTitle2.style.color = "pink";

// getElementsByTagName 
let achorTags = document.getElementsByTagName("a");
console.log(achorTags);

let achorTags2 = document.querySelectorAll(".card")[0].getElementsByTagName("a");
console.log(achorTags2);

// getElementsByClassName
let cardTitle3 =  document.getElementsByClassName("card-title");
console.log(cardTitle3)

// getElementsByName
let searchTag = document.getElementsByName("search");
console.log(searchTag[0]);