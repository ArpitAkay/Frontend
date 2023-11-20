class User {
    public name: string;
    private email: string;
    readonly city: string = "New York";
    protected courseCount: number = 4;

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }

    public get getEmail(): string {
        return this.email;
    }

    
    public set setEmail(email : string) {   //Interview question whenever you are making setter so you cannot make actually void
        this.email = email;
    }

    private deleteToken(): void {
        console.log("Token deleted");
    }
}

class SubUser extends User {
    public  isFamily: boolean = true;
    constructor(name: string, email: string) {
        super(name, email);
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