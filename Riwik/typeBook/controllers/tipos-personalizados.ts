//Tipos personalizados en typescript

type User={ id:number, name:string, phone:string,email:string}

interface User2{
    name:string
}

function printUser(data:User) {
    console.log(data.name, data.email);
}
class User3{
    getDay(){
        return new Date().getDay;
    }
}
const x =0;
const karina:User={
    name:'Karina Pineda ',
    id: 55,
    phone:'xxxxxx',
    email:'karina@example.com'
};
printUser( karina);
console.log(typeof karina);

//Tipos multiples
type Family = number | string | number[] | undefined ;

function getOptionFamily(persons:number):Family{
    if(persons ===0){
        return 'Nadie';
    }else if(persons===1){
        return 55;
    }else if(persons>1){
        return [55,56,57];
    }else{
        return undefined;
    }
}    

const resultFamily = getOptionFamily(0);
if(typeof resultFamily === 'string'){
    console.log(`No encontrado: ${resultFamily}`);
}else if(typeof resultFamily === 'number'){
    console.log(`Id individual: ${resultFamily}`);
}else if (typeof resultFamily==='object'){
    console.log(`Id de familia: ${resultFamily}`);
}else{
    console.log(`Error ${resultFamily}`);
}
console.log(resultFamily);



