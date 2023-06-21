//Chapter11 - Q1
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(complex) {
        this.real = this.real + complex.real;
        this.imaginary = this.imaginary + complex.imaginary;
        return 
    }

    get real() {
        return this._real;
    }
    
    set real(real) {
        this._real = real;
    }

    get imaginary() {
        return this._imaginary;
    }

    set imaginary(imaginary) {
        this._imaginary = imaginary;
    }
}

//Chapter11 - Q2
let complex1 = new Complex(6, 2);
let complex2 = new Complex(3, 4);

complex1.add(complex2);
console.log(complex1.real + "+" + complex1.imaginary + "i");

//Chapter11 - Q3
class Human {
    constructor(name, favFood) {
        this.name = name;
        this.favFood = favFood;
    }
    walk() {
        console.log(this.name + " Human is walking");
    }
}

class Student extends Human {
    walk() {
        console.log(this.name + " Student is walking");
    }
}

let student = new Student("Arpit", "Pizza");
student.walk();

//Chapter11 - Q4
console.log(student instanceof Human);

//Chapter11 - Q5
console.log("real :" + complex1.real);
complex1.real = 1;
console.log("real :" + complex1.real);
console.log("imaginary : " + complex1.imaginary);
complex1.imaginary = 2;
console.log("imaginary : " + complex1.imaginary);