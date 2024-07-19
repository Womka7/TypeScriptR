"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
class BooksController {
    constructor(urlApi) {
        this.urlApi = urlApi;
        this.token = null;
    }
    postLogin(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointLogin = 'api/v1/auth/login';
            const headers = {
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer <token>'
            };
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            };
            const url = this.urlApi + endpointLogin;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 201) {
                console.log(`Response body: ${(yield result.json()).message}`);
                throw new Error("Not authenticated: ");
            }
            const responseBodyLogin = yield result.json();
            console.log(`Result token: ${responseBodyLogin.data.token}`);
            this.token = responseBodyLogin.data.token;
            return responseBodyLogin;
        });
    }
    getListBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateToken();
            const endpointGetBooks = 'api/v1/books';
            const url = this.urlApi + endpointGetBooks;
            const response = yield fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            });
            console.log(`Status code: ${response.status}`);
            if (response.status !== 200) {
                console.log(`Response body: ${(yield response.json()).message}`);
                throw new Error("Failed to fetch books");
            }
            const responseBody = yield response.json();
            console.log(`Fetched ${responseBody.data.length} books`);
            return responseBody.data;
        });
    }
    postCreateBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateToken();
            const endpointCreateBook = 'api/v1/books';
            const url = this.urlApi + endpointCreateBook;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            };
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(book)
            };
            const response = yield fetch(url, reqOptions);
            console.log(`Status code: ${response.status}`);
            if (response.status !== 201) {
                const responseBody = yield response.json();
                console.log(`Response body: ${responseBody.message}`);
                throw new Error("Failed to create book: " + responseBody.message);
            }
            const responseBody = yield response.json();
            console.log(`Created book with id: ${responseBody}`);
            return responseBody;
        });
    }
    deleteBook(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateToken();
            const endpointDeleteBook = `api/v1/books/${bookId}`;
            const url = this.urlApi + endpointDeleteBook;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            };
            const reqOptions = {
                method: 'DELETE',
                headers: headers
            };
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 200) {
                const responseBody = yield result.json();
                console.log(`Response body: ${responseBody.message}`);
                throw new Error("Failed to delete book: " + responseBody.message);
            }
            // const responseBody:  = await result.json();
            // console.log(`Deleted book with id: ${responseBody.data.id}`);
            // return responseBody;
        });
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
    validateToken() {
        if (!this.token) {
            throw new Error("Not authenticated: No token found");
        }
    }
}
exports.BooksController = BooksController;
