import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from './store/interfaces/book.interface';
import { Store,select } from '@ngrx/store';
import * as fromBooks from './store/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-crud';
  books$ : Observable<IBook[]> = of();
  isLoading$: Observable<boolean>=of(false);

  constructor(private store:Store){}

  ngOnInit(): void {
    
  }

  private initDispatch(): void {
    this.store.dispatch(fromBooks.getBooks());
    this.initSubscriptions();
  }

  private initSubscriptions(): void {
    this.books$ = this.store.pipe(select(fromBooks.selectBookList));
    this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading));
  }

  onCreateBook(name: string): void {
    this.store.dispatch(fromBooks.createBook({
        book: {
            id: Math.random(),
            name
        }
    }));
  }

  onUpdateBook(book: IBook): void {
    this.store.dispatch(fromBooks.updateBook({book}));
  }

  onDeleteBook(book: IBook): void {
    this.store.dispatch(fromBooks.deleteBook({book}));
  }

}
