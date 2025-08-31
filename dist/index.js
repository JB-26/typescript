"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
if (age < 50) {
    age += 10;
}
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;
console.log(`${sales} ${course} ${is_published} ${level}`);
let numbers = [1, 2, 3];
console.log(numbers);
let user = [1, "Josh"];
user[1].toUpperCase();
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(10_000, 2022));
let employee = {
    id: 1,
    name: "Josh",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    resize: () => { },
};
console.log(textBox);
let quantity = 50;
console.log(quantity);
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hello");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { brithday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.brithday);
//# sourceMappingURL=index.js.map