"use strict";
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
