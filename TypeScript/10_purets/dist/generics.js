"use strict";
const score = [];
const names = [];
function identityOne(arg) {
    return arg;
}
console.log(identityOne(2));
console.log(identityOne({ brand: "Coca-Cola", type: "Plastic" }));
//generics in array
function getSearchProducts(products) {
    return products[0];
}
const getMoreSearchProducts = (products) => {
    return products[0];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
anotherFunction(1, {
    connection: "localhost",
    username: "admin",
    password: "admin",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
