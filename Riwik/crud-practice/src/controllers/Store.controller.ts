import { IProduct } from "../models/IProduct";

export class Storecontroller{
    url:string;
    constructor(url:string){
        this.url=url;
    }
    async getData(endPoint: string): Promise<IProduct[]>{
        const response =await fetch(`${this.url}${endPoint}`);
        const data = response.json();
        if(response.status !== 200){
            console.log('Hubo un error');
            
        }

        return data;
    }
}