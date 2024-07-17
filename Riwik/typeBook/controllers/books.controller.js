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
            const token = (`${responseBodyLogin.data.token}`);
            return token;
        });
    }
    getListBooks(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = 'api/v1/books';
            const response = yield fetch(this.urlApi + url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.postLogin(data)}'`
                }
            });
            const books = yield response.json();
            return books;
        });
    }
}
exports.BooksController = BooksController;
