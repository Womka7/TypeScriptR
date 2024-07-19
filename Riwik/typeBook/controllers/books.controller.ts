import { Datalist, IListBooks,  RequestLoginBooks,     ResponseLoginBooks } from "../models/books.models.js";

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


    
    async getListBooks():Promise<Datalist[]>{ 
        this.validateToken();

        const endpointGetBooks: string ='api/v1/books';

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

    async postCreateBook(book:Datalist):Promise<IListBooks>{
        this.validateToken();

        const endpointCreateBook: string = 'api/v1/books';
        const url: string = this.urlApi + endpointCreateBook;

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        };

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(book)
        };

        const response: Response = await fetch(url, reqOptions);

        console.log(`Status code: ${response.status}`);
        if (response.status !== 201) {
            const responseBody = await response.json();
            console.log(`Response body: ${responseBody.message}`);
            throw new Error("Failed to create book: " + responseBody.message);
        }
        const responseBody: IListBooks = await response.json();
        console.log(`Created book with id: ${responseBody}`);

        return responseBody;
    }



    async deleteBook(bookId: string): Promise<void> {
        this.validateToken();

        const endpointDeleteBook: string = `api/v1/books/${bookId}`;
        const url: string = this.urlApi + endpointDeleteBook;

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        };

        const reqOptions: RequestInit = {
            method: 'DELETE',
            headers: headers
        };

        const result: Response = await fetch(url, reqOptions);

        console.log(`Status code: ${result.status}`);
        if (result.status !== 200) {
            const responseBody = await result.json();
            console.log(`Response body: ${responseBody.message}`);
            throw new Error("Failed to delete book: " + responseBody.message);
        }
        // const responseBody:  = await result.json();
        // console.log(`Deleted book with id: ${responseBody.data.id}`);

        // return responseBody;
    }

        // async putUpdateBook(bookId: string, data: RequestCreateBook): Promise<ResponseUpdateBook> {
    //     this.validateToken();

    //     const endpointUpdateBook: string = `api/v1/books/${bookId}`;
    //     const url: string = this.urlApi + endpointUpdateBook;

    //     const headers: Record<string, string> = {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${this.token}`
    //     };

    //     const reqOptions: RequestInit = {
    //         method: 'PUT',
    //         headers: headers,
    //         body: JSON.stringify(data)
    //     };

    //     const result: Response = await fetch(url, reqOptions);

    //     console.log(`Status code: ${result.status}`);
    //     if (result.status !== 200) {
    //         const responseBody = await result.json();
    //         console.log(`Response body: ${responseBody.message}`);
    //         throw new Error("Failed to update book: " + responseBody.message);
    //     }
    //     const responseBody: ResponseUpdateBook = await result.json();
    //     console.log(`Updated book with id: ${responseBody.data.id}`);

    //     return responseBody;
    // }

    // async deleteAllBooks(): Promise<ResponseDeleteBook[]> {
    //     this.validateToken();

    //     const endpointDeleteBooks: string = 'api/v1/books';
    //     const url: string = this.urlApi + endpointDeleteBooks;

    //     const headers: Record<string, string> = {
    //         'Authorization': `Bearer ${this.token}`
    //     };

    //     const reqOptions: RequestInit = {
    //         method: 'DELETE',
    //         headers: headers
    //     };

    //     const result: Response = await fetch(url, reqOptions);

    //     console.log(`Status code: ${result.status}`);
    //     if (result.status !== 200) {
    //         const responseBody = await result.json();
    //         console.log(`Response body: ${responseBody.message}`);
    //         throw new Error("Failed to delete all books: " + responseBody.message);
    //     }
    //     const responseBody: ResponseDeleteBook[] = await result.json();
    //     console.log(`Deleted all books`);

    //     return responseBody;
    // }

    private validateToken() {
        if (!this.token) {
            throw new Error("Not authenticated: No token found");
        }
    }
}