import { Person } from "./classes/person.js";
import { Car } from "./classes/car.js";
import { Animal } from "./classes/animal.js";
import { House } from "./classes/house.js";
const person1 = new Person("Steven", "Zuluaga");
const person2= new Person ("karina", "Pineda");
/*console.log(person1.firstName, person2.lastName);
// console.log(person1, person2);
console.log(person1.gretting(), person2.gretting());
console.log(person1.brushTeeth());*/

let people:Person[]=[];
people.push(person1);
people.push(person2);


//recorrido y regreso de valores
people.map(persona=>{
    console.log(persona.eat ("Pizza"));
    
})

/*
    1   crear 5 clases con objetos del mundo real
    2   para cada clase crear su respectivo archivo
    3   exportar cada clase
    4   en el archivo index.ts instanciar cada uno de los objetos
    5   mostrar en consola los metodos de cada objeto
*/

const car1= new Car("toyota","z10",2015,"grey");
console.log(car1.ownerCar("Pepito Perez"));

// ---------------------------------------------

const animal1 = new Animal("femenino",8,"criollo","Niña");
console.log(animal1.makeSound("Guau!"));



// ---------------------------------------------

