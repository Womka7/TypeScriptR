// CONOCIMIENTOS BASICOS TS 

//-----------arreglos


let  names :string[]=["mario","luigi", "yoshi"];
names.push("princess");
console.log(names);


let numbers:(number | string )[] =[1,2,3,4];
numbers.push("30");
console.log(numbers);

//-----------objetos 

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


//-------------funciones

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

console.log(add2(5));// ------------------------------------------------------------



//Una interfaz es donde se designa 



// console.log("Hello world");
let age1: number = 2
age1 <18 ? console.log("Es menor de edad") : console.log("es mayor de edad");

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


