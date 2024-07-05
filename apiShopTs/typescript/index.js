// console.log("Hello world");
var age = 20;
age < 18 ? console.log("Es menor de edad") : console.log("es mayor de edad");
var user = {
    firstName: "Steven",
    lastName: "Zuluaga Cortes",
    age: 15
};
console.log(user.firstName);
//funciones
// La función recibe cierta cantidad de parámetros
function saludarS(nombre) {
    console.log("Hola mundo ".concat(nombre));
}
function saludar(nombre) {
    console.log("Hola mundo ".concat(nombre));
}
// A la función le envío como argumento 
// los datos de los parámetros designados
saludarS("Karina");
saludar(true);
var calculateTwoNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(calculateTwoNumbers(15, 18));
//métodos 
