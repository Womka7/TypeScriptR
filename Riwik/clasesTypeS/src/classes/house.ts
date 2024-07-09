export class House{
    rooms: string[];
    address: string;
    phoneNumber: string;
    bathroom: string[];

    constructor(rooms: string[], address: string, phoneNumber: string, bathroom: string[]) {
        this.rooms=rooms;
        this.address=address;
        this.phoneNumber=phoneNumber;
        this.bathroom=bathroom;
    }
     showInformation():void{
        console.log(` This house has ${this.rooms.length} and ${this.bathroom.length} and your address is in ${this.address.length} and your phoneNumber is ${this.phoneNumber.length}`);
        
     }

}