//la estructura de un objeto
interface IUser{
  firsName: string;
  lastName:string;
  age:number;
  skills?:string[];
  gretting():void;
}
/* otra manera de ver una interface
type IUser={
  firsName: string;
  lastName:string;
  age:number;
  skills:string[];
  gretting():void;
}
*/
const user1:IUser={
  firsName:"Stiven",
  lastName:"zuluaga",
  age:28,
  skills:["reactjs","English","backend"],
  gretting(){
    console.log("Hello World");
  }
}

//http://jsonplaceholder.typicode.com/posts  Interface a esta api

interface IPost{
  userId:number,
  id:number,
  title:string,
  body:string
}
const getPosts= async ()=> {
  const response:Response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};

getPosts();

//Programación orientada a objetos
/*
  1 Modularidad para facilitar la resolución de problemas
  2 Reutilización de código mediante herencia
  3 Encapsulación de datos y funciones
  4 Flexibilidad a través del polimorfismo
  5 Resolución efectiva de problemas.
  6 Legibilidad: permite comprender mejor el código al enfocarse en los objetos y conceptos clave.



  SUS 4 PILARES y/o CARACTERISTICAS PRINCIPALES
  ------------------------------------------------------------------------------------------------
  Abstracción: Crear interfaces que encapsulan los detalles de implementación.
  Encapsulación: Proteger y asegurar la información de un objeto.
  Herencia: Crear clases que hereden de otras clases para extender su comportamiento.
  Polimorfismo: Crear objetos que puedan responder a diferentes tipos de eventos de manera polifórmica.


  ELEMENTOS DE LA PROGRAMACIÓN ORIENTADA A OBJETOS
  ---------------------------------------------------------------
  Clase: modelo o plantilla para crear objetos. Una clase define las propiedades y comportamientos de un objeto.
  Objeto: instancia de una clase. Cada objeto tiene sus propias propiedades y comportamientos que se definen en su clase.
  Método: comportamientos de un objeto. 
  Atributo: características o propiedades de un objeto. 
  Eventos: similares a los métodos, pero en lugar de ser ejecutados por algún otro componente (como sucede con los métodos), los eventos son acciones que se activan de forma automática ante ciertas condiciones preestablecidas.


  */

  //Se crea un json server