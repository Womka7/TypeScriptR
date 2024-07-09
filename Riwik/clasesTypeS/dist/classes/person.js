export class Person {
    //Este constructor se realiza para poder inicializar los atributos de la clase
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    gretting() {
        console.log(`Hello ${this.firstName}`);
    }
    eat(food) {
        console.log(`${this.firstName} is eating ${food}`);
    }
    brushTeeth() {
        console.log(`${this.firstName} is brushing their teeth`);
    }
}
