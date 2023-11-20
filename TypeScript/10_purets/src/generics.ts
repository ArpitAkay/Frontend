const score: Array<number> = [];
const names: Array<string> = [];

function identityOne<T>(arg: T): T {
  return arg;
}

console.log(identityOne(2));

interface Bottle {
  brand: string;
  type: string;
}

console.log(identityOne<Bottle>({ brand: "Coca-Cola", type: "Plastic" }));

//generics in array
function getSearchProducts<T>(products: T[]): T {
  return products[0];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  return products[0];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object {
  return {
    valueOne,
    valueTwo,
  };
}

anotherFunction(1, {
  connection: "localhost",
  username: "admin",
  password: "admin",
});


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];

    public addToCart(item: T): void {
        this.cart.push(item);
    }
}