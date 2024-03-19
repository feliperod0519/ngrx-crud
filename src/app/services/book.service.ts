import { Observable, of } from "rxjs";
import { IBook } from "../store/interfaces/book.interface";

export class BookService{
    
    private booksList: IBook[] = [
        { id: Math.random(), name: 'Book1' },
        { id: Math.random(), name: 'Book2' },
    ]

    constructor(){}

    getBooks(): Observable<IBook[]> {
        return of(this.booksList);
    }
    
    create(book: IBook): Observable<IBook> {
        this.booksList = [
            ...this.booksList,
            book
        ];
        
        return of(book);
    }
    update(updateBook: IBook): Observable<IBook> {
        this.booksList.map(book => book.id === updateBook.id ? updateBook : book);
        
        return  of(updateBook);
    }
    
    delete(book: IBook): Observable<IBook> {
        this.booksList = this.booksList.filter(b => b.id !== book.id);
        return of(book);
    }
}