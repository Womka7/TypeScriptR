
/*-------------------------------------------------------
-------------------------------------------------------*/
/*-------------------------------------------------------
-------------------------------------------------------*/
 
 //Arrray ops

/*
->filter(callback): Crea un nuevo array con los elementos que cumplen una condición.
->map(callback): Crea un nuevo array aplicando una transformación a cada elemento.
->reduce(callback, initialValue): Reduce el array a un único valor acumulado.
->forEach(callback): Ejecuta una función para cada elemento del array (sin crear un nuevo array).
->find(callback): Devuelve el primer elemento que cumple una condición.
->some(callback): Devuelve true si al menos un elemento cumple una condición.
->every(callback): Devuelve true si todos los elementos cumplen una condición.
*/

/*-------------------------------------------------------
-------------------------------------------------------*/

//Filter []

const numbersFortun =[1,2,3,4,5,6];
console.log(numbersFortun)
//numeros parse
const evenNumbers= numbersFortun.filter(numberFortune => numberFortune %2 ===0);
console.log(evenNumbers)

/*-------------------------------------------------------
-------------------------------------------------------*/

//Map []
const numbersMap =[1,2,3,4,5,6];
//Multiplicar pro 2 cada elemento
const doubledNumbersMap =numbersMap.map(function(numberMap){
    return numberMap*2;
});
console.log(doubledNumbersMap);

//Example filter and map 
const users =[
    {name:'Pepito', age:55},
    {name:'Zulca', age:30},
    {name:'Zuker', age:20},
    {name:'tail', age:10},
];
const ussersUp30 = users.filter(user => user.age >30);
console.log(ussersUp30);

const onlyNames = users.map(user=> user.name);
console.log(onlyNames)


/*-------------------------------------------------------
-------------------------------------------------------*/

//Reduce
const numbersReduce = [1,2,3,4,5,6,7,8];
const sumNumberReduce = numbersReduce.reduce((acum, current)=> acum+current,0) //el último dato es el valor inicial
console.log(`La suma de ${numbersReduce} es = ${sumNumberReduce}`)


/*-------------------------------------------------------
-------------------------------------------------------*/

//forEach 
users.forEach(user => console.log(`Hola mi nombre es ${user.name}`));



/*-------------------------------------------------------
-------------------------------------------------------*/

//Find
const userUp20 = users.find(user => user.age >20);
console.log(userUp20?.name);

/*-------------------------------------------------------
-------------------------------------------------------*/

//Some
const  userZulca =users.some(user => user.name ==='Zulca');
if(userZulca){
    console.log('Si existe Zulca');
}else{
    console.log('No existe Zulca');
}

/*-------------------------------------------------------
-------------------------------------------------------*/

//Every
const allUsersUpEqual18 =users.every(user=>user.age >=18);
if(allUsersUpEqual18){
    console.log('Mayores de 18 años, pueden acceder');
}else{
    console.log('Menores de 18 años, no se permite menores de edad');
}


/*
Array(6) [ 1, 2, 3, 4, 5, 6 ]
runtime.ts:177:16
Array(3) [ 2, 4, 6 ]
runtime.ts:177:16
Array(6) [ 2, 4, 6, 8, 10, 12 ]
runtime.ts:177:16
Array [ {…} ]
​
0: Object { name: "Pepito", age: 55 }
​
length: 1
​
<prototype>: Array []
runtime.ts:177:16
Array(4) [ "Pepito", "Zulca", "Zuker", "tail" ]
​
0: "Pepito"
​
1: "Zulca"
​
2: "Zuker"
​
3: "tail"
​
length: 4
​
<prototype>: Array []
runtime.ts:177:16
La suma de 1,2,3,4,5,6,7,8 es = 36 runtime.ts:177:16
Hola mi nombre es Pepito runtime.ts:177:16
Hola mi nombre es Zulca runtime.ts:177:16
Hola mi nombre es Zuker runtime.ts:177:16
Hola mi nombre es tail runtime.ts:177:16
Pepito runtime.ts:177:16
Si existe Zulca runtime.ts:177:16
Mayores de 18 años, pueden acceder
*/ 