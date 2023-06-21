class Animal {
    constructor(name) {
        this.name = Animal.capitalizeName(name);
    }
    walk() {
        alert("Animal " + this.name + " is walking");
    }
    static capitalizeName(name) {
        return name.charAt(0).toUpperCase() + name.substring(1, name.length);
    }
}

let animal = new Animal("jack");
animal.walk();