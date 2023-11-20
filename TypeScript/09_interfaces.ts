interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleToken?: string
    startTrail: () => string    // function
    startTrail2(): string   // function
    getCoupon(couponName: string, value: number): number
}

//Reopening the interface 
interface User {
    githubToken?: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const user: User = {
    dbId: 1,
    email: "arpit@gmail.com",
    userId: 1,
    startTrail: () => {
        return "Trial started"
    },
    startTrail2: () => {
        return "Trial started"
    },
    getCoupon: (couponName: string, value: number) => {
        return 10;
    }
}

console.log(user.startTrail());
console.log(user.startTrail2());
console.log(user.getCoupon("Arpit", 10));