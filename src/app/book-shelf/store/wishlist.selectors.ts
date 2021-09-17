import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, wishlistFeatureKey } from './wishlist.reducer';

export const selectItemState = createFeatureSelector<State>(
    wishlistFeatureKey
)

// export const getItem = createSelector(selectItemState, state => state.Wishlist)
