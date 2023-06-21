let message = "Good Global";

function hello1() {
    let message = "Good Morning";
    {
        message = "Good Afternoon";
        console.log("Hello1: " + message);
    }
    let c = function hello2() {
        console.log("I am c" + message);
    }

    return c;
}

let c = hello1();
c();

const returnFunc = () => {
    const x = () => {
        let a = 1;
        console.log(a);

        const y = () => {
            // a = 2;
            console.log(a);

            const z = () => {
                // a = 3;
                console.log(a);
            }
            z();
        }
        a = 999;
        y();
    }
    return x;
}

let x = returnFunc();
x();

