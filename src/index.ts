let age: number = 20;
if (age < 50) {
  age += 10;
}

// if you have a large number, you can use underscores to make it more readable
/*
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
*/
// you don't have to always declare the type, TypeScript can infer the type from the value assigned to the variable.

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
// however, it will use any type if you don't specify a type
let level;

console.log(`${sales} ${course} ${is_published} ${level}`);

// tsconfig will need to have the following set to false to ignore errors uisng the any type in a function argument
// "noImplicitAny": false
/*
function render(document) {
  console.log(document);
}
*/

// can apply type annotation to array
// but it can infer
let numbers = [1, 2, 3];
console.log(numbers);
// for empty arrays, best to explicity define the type
// let numbers: number[] = [];

// TUPLES
// this will only allow 2 elements, defined by the type annotation
let user: [number, string] = [1, "Josh"];
// you can access the second element of the tuple and their methods.
// if you access user then you can access array methods, which is troublesome
user[1].toUpperCase();
// this would work
// user.push(1);
// keep tuples to two values, like key value pairs

// enums
/*
const small = 1;
const medium = 2;
const large = 3;
*/

// using PascalCase - first letter is capital
// you can use const at the start for more optimized code
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// functions
// at the end of the function, you can specify the return type
// keep in mind that "noUnusedParameters": true will highlight unused parameters
// "noImplicitReturns": true
// has a default value of 2022
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

console.log(calculateTax(10_000, 2022));

// objects
// name is optional so it can be initialized
// readonly prevents id from being changed

// Aliases
type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Josh",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee);

// now we can call this using either a string or a number
function kgToLbs(weight: number | string): number {
  // at the moment, the only methods available are those which are available in both number and string
  // if there is a one liner, you don't need the brackets
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10");

// this is now an object that is both a number and a string at the same time
//let weight: number & string

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
console.log(textBox);

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;
console.log(quantity);

// this has a union operator - |
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hello");
}

// never "strictNullChecks": false,
// but you cannot pass undefined
greet(null);

// birthday property is now optional
type Customer = {
  brithday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { brithday: new Date() };
}

let customer = getCustomer(1);
// optional property access operator - ?
// will only return a value if it exists
console.log(customer?.brithday?.getFullYear());

// optional element access operator
// customers?.[0]

// optional call
let log: any = null;
// this will only be called if log is referencing an actual function
// otherwise undefined
log?.("a");
