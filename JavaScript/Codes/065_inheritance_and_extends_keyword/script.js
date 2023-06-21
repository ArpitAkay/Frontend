class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " is running");
    }
    shout() {
        console.log(this.name + " is shouting");
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + " is eating banana");
    }
}

let animal = new Animal("Lion", "Yellow");
let monkey = new Monkey("Chimpu", "Brown");
animal.shout();
monkey.eatBanana();