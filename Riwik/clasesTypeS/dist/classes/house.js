export class House {
    constructor(rooms, address, phoneNumber, bathroom) {
        this.rooms = rooms;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.bathroom = bathroom;
    }
    showInformation() {
        console.log(` This house has ${this.rooms.length} and ${this.bathroom.length} and your address is in ${this.address.length} and your phoneNumber is ${this.phoneNumber.length}`);
    }
}
