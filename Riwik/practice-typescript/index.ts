
// 1. Introduction to TypeScript
const namePet:string="Niña";
let agePet:number=8;
const breedPet:string="Dalmata";
let typeAninal:string[]=["Dog","Cat","Bird"]
let havePets:boolean=true;
let amountPet:undefined;
function pets(namep:string):any {
    namep= `La nueva mascota ${namePet}`
    return(namep);
    
    
}
let namep:string=''
console.log(namePet, agePet, breedPet,typeAninal[2] ,havePets, amountPet, pets(namep));

// 2. TypeScript Basics