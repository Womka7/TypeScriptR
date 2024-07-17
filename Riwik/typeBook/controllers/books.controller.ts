import { Datum, IListBooks, RequestLoginBooks, ResponseLoginBooks } from "../models/books.models.js";

export class BooksController {

    private urlApi:string;
    
    constructor(urlApi:string){
        this.urlApi=urlApi;

    }
    
    async postLogin(data: RequestLoginBooks): Promise<ResponseLoginBooks>{
        let endpointLogin: string ='api/v1/auth/login';

        const headers:Record<string, string> ={
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer <token>'
        }
        const reqOptions: RequestInit={
            method: 'POST',
            headers:headers,
            body: JSON.stringify(data)
        }
        const url: string= this.urlApi + endpointLogin;
        const result:Response = await fetch(url, reqOptions);
        
        console.log(`Status code: ${result.status}`);
        if(result.status !== 201) {
            console.log(`Response body: ${(await result.json()).message}`);
            throw new Error("Not authenticated: ");
        }
        const responseBodyLogin:ResponseLoginBooks= await result.json();
        console.log(`Result token: ${responseBodyLogin.data.token}`);
        
        return responseBodyLogin;

        // console.log(`${this.urlApi} login`);
    }


    
    async getListBooks(data: RequestLoginBooks):Promise<Datum[]>{ 
        let url: string ='api/v1/books';

        const response = await fetch(this.urlApi+url,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${}`
            }
        })

        const books:Datum[] = await response.json();
        return books;
    }
}