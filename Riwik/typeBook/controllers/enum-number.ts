//enumeration


//Enum number
enum week{
    lun,
    mar,
    mie,
    jue,
    vie,
    sab,
    dom
}

const day = week.lun;
console.log(day);
console.log(typeof day);

//Enum string
enum weekStr{
    lun = 'lunes por la mañana',
    mar = 'martes',
    mie = 'miercoles',
    jue = 'jueves',
    vie = 'viernes',
    sab = 'sábado',
    dom = 'domingo'
}

const dayStr = weekStr.lun;
console.log(dayStr);
console.log(typeof dayStr);


//Enums in functions

function printDay (dayToPrint:weekStr){
    console.log(dayToPrint);
}
printDay(weekStr.dom)

/*-------------------------------------------------------
-------------------------------------------------------*/
/*-------------------------------------------------------
-------------------------------------------------------*/


// Exports

// -------> shapes.ts
class Circle{
    constructor(public radius:number){

    }
    getArea():number{
        return Math.PI * this.radius;
    }
}
class Square{
    constructor(public sideLength:number){}
    getArea():number{
        return this.sideLength *this.sideLength
    }
}
//Export multiple
export{ Circle,Square}

// -------> main.ts

import{Circle,Square} from './shapes'


//Export (Reexportaciones)

// ---------> index.ts
export * from './shapes'
export * from './versions'


//Export default 

//-----------> user.ts
export default class Useer{
    constructor(public name:string){}
    getName(){
        return `Hola soy ${this.name}`
    }
}
export function getTime(){
    return new Date();
}

// -----------> profile.ts
import User, {getTime} from './user'


