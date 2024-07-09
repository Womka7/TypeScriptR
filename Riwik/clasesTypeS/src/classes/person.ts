export class Person{
    private firstName:string;
    private lastName:string;

    //Este constructor se realiza para poder inicializar los atributos de la clase
    constructor(firstName:string, lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    gretting():void{
        console.log(`Hello ${this.firstName}`);
    }
    eat(food:string):void{
        console.log(`${this.firstName} is eating ${food}`);
    }
    brushTeeth():void{
        console.log(`${this.firstName} is brushing their teeth`);
        
    }
}
