import { RequestLoginBooks, ResponseLoginBooks } from "./models/books.models.js";
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
        
    } catch (e) {
        console.log(` =( : ${e})`);
    }

}
main();