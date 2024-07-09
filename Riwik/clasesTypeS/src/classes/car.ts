export class Car{
    private brand: string;
    private model: string;
    private year: number;
    private color: string;

    constructor(brand:string, model:string, year:number, color:string){
        this.brand=brand;
        this.model=model;
        this.year=year;
        this.color=color;
    }
    ownerCar(person:string){
        console.log(`${this.brand} ${this.model} is owned by ${person}`);
    }
    driverCar(){
        
    }
}