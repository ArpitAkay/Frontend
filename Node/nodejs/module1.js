const hello = () => {
    console.log("Hello");
}

const nameHello = (name) => {
    console.log("Hello " + name);
}

module.exports = {hello, nameHello};    // same as below line
// module.exports = {"hello": hello, "nameHello": nameHello};
