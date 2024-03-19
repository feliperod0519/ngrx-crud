import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBookState } from "./book.state";

export const selectBookState = createFeatureSelector<IBookState>('book');
export const selectBookList = createSelector(selectBookState,(state:IBookState)=>state.books);
export const selectBookIsLoading = createSelector(selectBookState,(state)=>state.isLoading);
