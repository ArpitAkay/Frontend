const User = {
    name: "Arpit Kumar",
    email: "arpitkumar@gmail.com",
    isActive: true
}

function createUser(obj: {name: string, isActive: boolean}) {
    console.log(obj.name);
    console.log(obj.isActive);
}

let newUser = {
    name: "Arpit Kumar",
    isActive: true,
    email: "arpit@gmail.com"
}

createUser(newUser);

function createCourse(): {name: string, isActive: boolean} {
    return {name: "Arpit", isActive: true};
}

console.log(createCourse());


//Type alias
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUserInfo(user: User): User {
    return user;
}

createUserInfo({
    name: "Arpit",
    email: "arpitkumar@gmail.com",
    isActive: true
});

//read only
type User2 = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: string    //? means optional
}

let newUser2: User2 = {
    _id: "123",
    name: "Arpit",
    email: "arpit@gmail.com",
    isActive: true
}

newUser2.email = "arpitk@gmail.com";
// newUser2._id = "456";

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {    //& means combine all things
    cardCVV: number
}

export {}