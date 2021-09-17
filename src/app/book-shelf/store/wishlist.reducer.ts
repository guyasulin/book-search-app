import { Action, createReducer, on } from '@ngrx/store';
import * as wishlistAction from '../store/wishlist.actions';


export const wishlistFeatureKey = 'wishlist';

export interface State {
  Wishlist: any[]
}

export const initialState: State = {
  Wishlist:[]
};


export const reducer = createReducer(
  initialState,

  on(wishlistAction.getWishlists, (state, action) => {
    return state;
  }),
    on(wishlistAction.addBookToWishlists, (state, action) => {
      const newWishlistState = [...state.Wishlist];
      newWishlistState.push(action.book)
      return {
        ...state,
        Wishlist: newWishlistState
      }
    }),
    on(wishlistAction.removeBook, (state, action) => {
      const deleteItem = state.Wishlist.filter((item) => item.id !== action.id);
      return {
        ...state,
        Wishlist: deleteItem
      };
    })
  );
  export function wishlistReducer(state: State | undefined, action: Action) {
    return reducer(state, action);
  }