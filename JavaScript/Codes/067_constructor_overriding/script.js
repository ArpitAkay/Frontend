class Employee {
    constructor(name) {
        this.name = name;
        console.log(`${name} -> Employee's constructor is here`);
    }
    login() {
        console.log("Employee has logged in");
    }
    logout() {
        console.log("Employee has logged out");
    }
    requestLeaves(leaves) {
        console.log("Employee has requested " + leaves + " leaves - Auto approved");
    }
}

class Programmer extends Employee {
    // constructor(...args) {   If there is not constructor in the child class, this is created automatically
    //     super(...args);
    // }
    constructor(name) {
        super(name);
        console.log(`${name} - Programmer's constructor is here. This is a newly written constructor`);
        this.name = name
    }
    requestCoffee(noOfCoffees) {
        console.log("Programmer has requested " + noOfCoffees + " coffee");
    }
    requestLeaves(leaves) {
        super.requestLeaves(leaves);
        console.log("One extra is granted")
        // console.log("Employee has requested " + (leaves+1) + " leaves(One extra)");
    }
}

// let employee = new Employee();
// employee.login();
// employee.requestLeaves(4);

let programmer = new Programmer("Harry");
programmer.login();
programmer.requestLeaves(4);