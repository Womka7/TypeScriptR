 export class Animal{
    private gender: string;
    private age: number;
    private race: string;
    private name: string;

    constructor(gender: string, age: number, race: string, name: string){
        this.gender=gender;
        this.age=age;
        this.race=race;
        this.name=name;
    }

    makeSound(sound:string):void{
        console.log(`${this.name} - make sound ${sound}`);
    }

}