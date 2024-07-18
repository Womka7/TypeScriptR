import { Datum, IListBooks, RequestLoginBooks, ResponseLoginBooks } from "../models/books.models.js";

export class BooksController {

    private urlApi:string;
    private token:string | null;
    
    constructor(urlApi:string,){
        this.urlApi=urlApi;
        this.token=null;

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
        
        this.token=responseBodyLogin.data.token;

        return responseBodyLogin;

    }


    
    async getListBooks():Promise<Datum[]>{ 
        if (!this.token) {
            throw new Error("Not authenticated: No token found");
        }

        const endpointGetBooks: string ='api/v1/books';

        const reqOptions:RequestInit={
           
        };

        const url:string=this.urlApi + endpointGetBooks;
        const response:Response = await fetch(url,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        });

        console.log(`Status code: ${response.status}`);
        if (response.status !== 200) {
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error("Failed to fetch books");
        }
        const responseBody: IListBooks = await response.json();
        console.log(`Fetched ${responseBody.data.length} books`);

        return responseBody.data;
    }
}