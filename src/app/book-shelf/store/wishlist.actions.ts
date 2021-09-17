import { Book } from './../model/book';
import { createAction, props } from '@ngrx/store';

export const getWishlists = createAction(
  '[Wishlist] Y Wishlists'
);

export const addBookToWishlists = createAction(
  '[Wishlist] Y Wishlists Success',
  props<{ book: any }>()
);

export const removeBook = createAction(
  "[Remove Item] Remove Item",
  props<{ id: Book }>()
);
