function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("hello");
addTwo(2);

function signUpUser(name: string, email: string, isPaid: boolean) {
    console.log(name, email, isPaid);
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log(name, email, isPaid);
}

signUpUser("arpit", "arpit@gmail.com", true);
loginUser("arpit", "arpit@gmail.com")

function getValue(myVal: number): boolean | string {
    if(myVal > 5) {
        return true;
    }
    return "200 OK";
}

const getHello = (s: string): string => {
    return "";
}

const heros = ["thos", "ironman", "spiderman"];
// const heros = [1, 2, 3];

heros.map((hero: string) => {
    console.log(`Hero is ${hero}`);
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {}