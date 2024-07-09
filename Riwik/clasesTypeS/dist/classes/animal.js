export class Animal {
    constructor(gender, age, race, name) {
        this.gender = gender;
        this.age = age;
        this.race = race;
        this.name = name;
    }
    makeSound(sound) {
        console.log(`${this.name} - make sound ${sound}`);
    }
}
