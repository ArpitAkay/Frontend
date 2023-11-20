"use strict";
class User {
    constructor(name, email) {
        this.city = "New York";
        this.courseCount = 4;
        this.name = name;
        this.email = email;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubUser extends User {
    constructor(name, email) {
        super(name, email);
        this.isFamily = true;
        this.courseCount = 5;
        console.log(this.city);
    }
}
const user = new User("John", "john@gmail.com");
// user.city = "New York";
console.log(user);
console.log(user.name);
console.log("email: " + user.getEmail);
user.setEmail = "johnDoe@gmail.com";
console.log("email: " + user.getEmail);
console.log(user.city);
