import { createReducer, on } from "@ngrx/store";
import { IBookState } from "./book.state";
import * as fromBooks from '../index';

export const initialBookState: IBookState = {
    books: [],
    isLoading: false
}

const reducer = createReducer<IBookState>(
    initialBookState,
    on(fromBooks.getBooks,(state)=>{ return {...state, isLoading: true}}),
    on(fromBooks.getBooksSuccess,(state,{books})=>{ return {...state, isLoading: false, books}}),
    on(fromBooks.createBook,(state)=>{ return {...state, isLoading: true}}),
    on(fromBooks.createBookSuccess,(state,{book})=>{ return {...state,books:[...state.books,book],isLoading:false }}),
    on(fromBooks.updateBook, (state) => { return { ...state,isLoading: true };}),
    on(fromBooks.updateBookSuccess, (state, { book }) => { return { ...state,
                                                                    books: state.books.map((b) => b.id === book.id ? book : b),
                                                                    isLoading: false
                                                                  };
                                                          }),
    on(fromBooks.deleteBook, (state) => { return { ...state,isLoading: true };}),
    on(fromBooks.deleteBookSuccess, (state, { book }) => { return { ...state,isLoading: false,
                                                                    books: state.books.filter((b) => b.id !== book.id)
                                                                  };
                                                         })
);

export function booksReducers(state=initialBookState,actions:any):IBookState{
    return reducer(state,actions)
}