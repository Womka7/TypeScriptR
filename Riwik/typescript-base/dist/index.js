"use strict";
// ----dom con type script
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log(`${type.value.toUpperCase()} is from: ${toFrom.value} details: ${details.value} the amount is: ${amount.valueAsNumber}`);
});
//-----------arreglos
let names = ["mario", "luigi", "yoshi"];
names.push("princess");
console.log(names);
let numbers = [1, 2, 3, 4];
numbers.push("30");
console.log(numbers);
//-----------objetos 
let useer = {
    firstName: "steven",
    lastName: 'Zuluaga',
    age: 42
};
useer = {
    firstName: "mario",
    lastName: "bros",
    age: 45
};
console.log(useer.firstName.length);
//-------------funciones
const add = (num1, num2) => {
    console.log(num1 + num2);
};
add(5, 8);
const add1 = (num1, num2) => {
    const suma = num1 + num2;
    return suma;
};
console.log(add1(8, 8));
const add2 = (num1, num2) => {
    let suma = 0;
    if (num2) {
        suma = num1 + num2;
    }
    return suma;
};
console.log(add2(5));
