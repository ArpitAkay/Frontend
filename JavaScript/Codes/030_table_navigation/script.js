let tableElement = document.body.firstElementChild.firstElementChild;
console.log(tableElement);
console.log(tableElement.rows)  // gives all rows of table
console.log(tableElement.caption);  // give caption element to table
console.log(tableElement.tHead);
console.log(tableElement.tFoot);
console.log(tableElement.tBodies);
console.log(tableElement.tBodies[0].rows);
console.log(tableElement.tBodies[0].rows[0].cells);
console.log(tableElement.tBodies[0].rows[0].sectionRowIndex);
console.log(tableElement.tBodies[0].rows[0].rowIndex);
console.log(tableElement.tBodies[0].rows[0].cells[1].cellIndex);