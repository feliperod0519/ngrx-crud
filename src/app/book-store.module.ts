import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { booksReducers } from './store/book/book.reducer';
import { BooksEffects } from './store/book/book.effects';

@NgModule({
    imports:[StoreModule.forFeature('book',booksReducers),
             EffectsModule.forFeature([BooksEffects])]
})
export class BookStoreModule{
    
}