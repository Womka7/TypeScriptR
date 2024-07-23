//Operador Spread (...)

//combinar objetos
const user = { name: "Milton", address: "Avenida siempre viva" };
const books = { books: ["abc", "123"] };

const body ={name:user.name,address:user.address,books:books.books};
const body2 = {...user,...books,createAt:'mañana'};
console.log(body2);

//Copiar Arrays
const agess =[20,30,40];
const copyAges=[...agess, 45];
console.log(copyAges);
 

//Combinar Arrays
const ages2=[50,60,70];
const  combineArray = [...agess, ...copyAges, ...ages2];
console.log(combineArray);

//
