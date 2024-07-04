// console.log("Hello world");
let age1: number = 2
age1 <18 ? console.log("Es menor de edad") : console.log("es mayor de edad");


//Una interfaz es donde se designa 
// que atributos va a tener un objeto 
// y que tipo de dato va a ser y si es opcional
interface IPerson{
    firstName:string;
    lastName:string;
    age?:number
}

let user:IPerson={
    firstName :"Steven",
    lastName:"Zuluaga Cortes",
    age: 15
};

console.log(user.firstName);


//funciones
// La función recibe cierta cantidad de parámetros
function saludarS(nombre:string) {
    console.log(`Hola mundo ${nombre}`);
    
}

function saludar(nombre:string | boolean) {
    console.log(`Hola mundo ${nombre}`);
    
}

// A la función le envío como argumento 
// los datos de los parámetros designados
saludarS("Karina");
saludar(true);

const calculateTwoNumbers=(num1:number,num2:number):number=>{
    return num1+num2;
}


console.log(calculateTwoNumbers(15,18));



//métodos 


