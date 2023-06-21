class Employee {
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

let programmer = new Programmer();
programmer.login();
programmer.requestLeaves(4);