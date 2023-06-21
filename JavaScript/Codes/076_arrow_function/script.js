const sayHello = (name, greeting) => console.log(greeting + " " + name);

sayHello("John", "Good Morning");

const x = {
    "name": "Arpit",
    "role": "JS Developer",
    "exp": "1",
    "show": function() {
        let that = this;
        console.log(this);
        setTimeout(function() {
            console.log("This name is " + that.name + "\nThe role is " + that.role);
        }, 4000);
    }
}

x.show();