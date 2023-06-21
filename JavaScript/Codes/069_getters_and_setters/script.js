class Animal {
    constructor(name) {
        this._name = name;
    }
    fly() {
        alert("I can fly");
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}

class Rabbit extends Animal {
    eatCarrot() {
        alert("Eating carrot");
    }
}

let animal = new Animal("jack");
animal.fly();
console.log(animal.name);
animal.name = "Jackie";
console.log(animal.name);

let a = 56;
console.log(a instanceof Animal);

let rabbit = new Rabbit("Rabbit");
console.log(rabbit instanceof Animal);