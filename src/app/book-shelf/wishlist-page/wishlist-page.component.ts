import { Book } from './../model/book';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import * as fromAction from '../store/wishlist.actions';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {
  favourites$: Observable<Book[]>;

  constructor(private store: Store<any>) { }
  items:[]
  ngOnInit(): void {
    this.favourites$ =  this.store
    .pipe(
      map(data => data.Wishlist.Wishlist)
    )
  }

  remove(id) {
    // console.log(id);
    // this.items.filter((item) => item !== id);
    // this.favourites$.pipe(
    //   filter((item) => {
    //     console.log(item);
        
    //     if (item == id) {
    //       return true;
    //     } else {
    //        return false;
    //     }
    //   })
    // ).subscribe()
    // this.items.splice(id, 1);
		this.store.dispatch(fromAction.removeBook({ id }));
  }
}
