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
const books_controller_js_1 = require("./controllers/books.controller.js");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataToLogin = {
            email: 'prueba@prueba.pru',
            password: 'C0ntr4S3gu++r4'
        };
        const booksController = new books_controller_js_1.BooksController('http://190.147.64.47:5155/');
        try {
            const resultLogin = yield booksController.postLogin(dataToLogin);
            console.log(resultLogin);
            const ListBooks = yield booksController.getListBooks();
            console.log(ListBooks);
            // instancia de crear book
            // const newBook= {
            //     title: 'la iliada',
            //     author: 'Homero',
            //     description: 'libro griego-epico',
            //     summary: 'narra los eventos de la Guerra de Troya, especialmente centrados en el heroico guerrero Aquiles. La historia se desarrolla durante las últimas semanas del conflicto, destacando las tensiones entre los líderes griegos, particularmente entre Agamenón y Aquiles. El poema comienza con la ira de Aquiles tras ser despojado de su concubina, Briseida, por Agamenón.'
            // };
            // const createdBook:IListBooks = await booksController.postCreateBook(newBook);
            // console.log(createdBook);
            // instancia de eliminar book
            const deleteBookId = '5cbf18df-e2cd-48e0-88a8-e2e9bfa65174';
            const deletedBook = yield booksController.deleteBook(deleteBookId);
            console.log(deletedBook);
            // const updatedBookData: RequestCreateBook = {
            //     title: 'Libro Actualizado',
            //     author: 'Autor Ejemplo Actualizado',
            //     description: 'Descripción actualizada del libro',
            //     summary: 'Resumen actualizado del libro',
            //     publicationDate: new Date()
            // };
            // const updatedBook: ResponseUpdateBook = await booksController.putUpdateBook(createdBook.data.id, updatedBookData);
            // console.log(updatedBook);
            // const deletedBook: ResponseDeleteBook = await booksController.deleteBook(createdBook.data.id);
            // console.log(deletedBook);
            // const deletedAllBooks: ResponseDeleteBook[] = await booksController.deleteAllBooks();
            // console.log(deletedAllBooks);
        }
        catch (e) {
            console.log(` =( : ${e})`);
        }
    });
}
main();
