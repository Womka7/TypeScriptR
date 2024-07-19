import { RequestCreateBook, RequestLoginBooks, ResponseCreateBook, ResponseDeleteBook, ResponseLoginBooks, ResponseUpdateBook } from "./models/books.models.js";
import { BooksController } from "./controllers/books.controller.js";

async function main(): Promise <void> {
    
    const dataToLogin:RequestLoginBooks={
        email: 'prueba@prueba.pru',
        password: 'C0ntr4S3gu++r4'
    }

    const booksController:BooksController = new BooksController('http://190.147.64.47:5155/');

    try {
        const resultLogin:ResponseLoginBooks=await booksController.postLogin(dataToLogin);
            console.log(resultLogin);
        
        const ListBooks = await booksController.getListBooks();

        console.log(ListBooks);

        const newBookData: RequestCreateBook = {
            title: 'la iliada',
            author: 'Homero',
            description: 'libro griego-epico',
            summary: 'narra los eventos de la Guerra de Troya, especialmente centrados en el heroico guerrero Aquiles. La historia se desarrolla durante las últimas semanas del conflicto, destacando las tensiones entre los líderes griegos, particularmente entre Agamenón y Aquiles. El poema comienza con la ira de Aquiles tras ser despojado de su concubina, Briseida, por Agamenón.',
            publicationDate: new Date()
        };

        const createdBook: ResponseCreateBook = await booksController.postCreateBook(newBookData);
        console.log(createdBook);

        const updatedBookData: RequestCreateBook = {
            title: 'Libro Actualizado',
            author: 'Autor Ejemplo Actualizado',
            description: 'Descripción actualizada del libro',
            summary: 'Resumen actualizado del libro',
            publicationDate: new Date()
        };

        const updatedBook: ResponseUpdateBook = await booksController.putUpdateBook(createdBook.data.id, updatedBookData);
        console.log(updatedBook);

        const deletedBook: ResponseDeleteBook = await booksController.deleteBook(createdBook.data.id);
        console.log(deletedBook);

        const deletedAllBooks: ResponseDeleteBook[] = await booksController.deleteAllBooks();
        console.log(deletedAllBooks);
        
    } catch (e) {
        console.log(` =( : ${e})`);
    }

}
main();