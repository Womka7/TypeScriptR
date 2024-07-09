export class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    ownerCar(person) {
        console.log(`${this.brand} ${this.model} is owned by ${person}`);
    }
    driverCar() {
    }
}
