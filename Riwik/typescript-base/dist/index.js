"use strict";
// const form =document.querySelector(".new-item-form") as HTMLFormElement;
// const type =document.querySelector("#type") as HTMLSelectElement;
// const toFrom=document.querySelector("#tofrom") as HTMLInputElement;
// const details =document.querySelector("#details") as HTMLInputElement;
// const amount =document.querySelector("#amount")as HTMLInputElement;
// form.addEventListener("submit",(ev:Event)=>{
//   ev.preventDefault();
//   console.log(`${type.value.toUpperCase()} is from: ${toFrom.value} details: ${details.value} the amount is: ${amount.valueAsNumber}`);
// });
//-----------arreglos
/*
let  names :string[]=["mario","luigi", "yoshi"];
names.push("princess");
console.log(names);


let numbers:(number | string )[] =[1,2,3,4];
numbers.push("30");
console.log(numbers);
*/
//-----------objetos 
/*
let useer ={
  firstName:"steven",
  lastName:'Zuluaga',
  age:42
};

useer={
  firstName:"mario",
  lastName:"bros",
  age:45
}

console.log(useer.firstName.length);
*/
//-------------funciones
/*
const add=(num1:number,num2:number)=>{
  console.log(num1+num2);
}

add(5,8)

const add1=(num1:number,num2:number)=>{
  const suma: number=num1+num2;
  return suma;
}

console.log( add1(8,8));


const add2=(num1:number,num2?:number):number=>{
  let suma: number=0;
  if(num2){
    suma=num1+num2;
  }
  return suma
}
console.log(add2(5));
*/
//EJERICIO NUMERO 1
//Programa que pide al usuario un numero y muestra si es par o impar
const numero1 = document.getElementById("numberOne");
const form = document.querySelector(".new-item-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(numero1.value);
    typeNumber();
});
const typeNumber = () => {
    let dato = numero1.valueAsNumber;
    (dato % 2) == 0 ? alert("par") : alert("impar");
};
//EJERICIO NUMERO 2
//Programa que pide al usuario que ingrese su nombre. Luego, verifica 
// si el nombre ingresado no es nulo ni está vacío. Si el nombre es válido, 
// muestra un mensaje de bienvenida; de lo contrario, muestra un mensaje de error.
