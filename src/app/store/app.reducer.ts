import * as fromWishlist from '../book-shelf/store/wishlist.reducer'
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    Wishlist: fromWishlist.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    Wishlist: fromWishlist.wishlistReducer,
  };