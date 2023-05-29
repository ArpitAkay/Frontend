// Error Object
try {
    // arpit
    throw new ReferenceError("Harry is not good");
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

// Custom Error
let age = prompt("Enter your age");
age = Number.parseInt(age);

try {
    if (age > 150) {
        throw new ReferenceError("This is probably not true");
    }
} catch (error) {
    console.log(error.message)
}

//try-catch-finally

const f = () => {
    try {
        let a = 0;
        // console.log(program);
        console.log("Program ran successfully");
        return;
    } catch (error) {
        console.log("This is an error");
        console.log(p);
    } finally {
        console.log("I am good boy");
    }
}

f();