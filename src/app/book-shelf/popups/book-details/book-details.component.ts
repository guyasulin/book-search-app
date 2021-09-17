import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromWishlist from '../../store/wishlist.reducer';
import * as fromAction from '../../store/wishlist.actions';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public book: any,
    private store: Store<fromWishlist.State>,
  ) { }

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }

  save(favourite) {
    this.dialogRef.close();
		this.store.dispatch(fromAction.addBookToWishlists({ book: favourite }));
  }
}
