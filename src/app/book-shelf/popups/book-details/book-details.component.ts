import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromWishlist from '../../store/wishlist.reducer';
import * as fromAction from '../../store/wishlist.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }

  save(favourite) {
    this.dialogRef.close();
    this.openSnackBar('Saved successfully')
		this.store.dispatch(fromAction.addBookToWishlists({ book: favourite }));
  }

  openSnackBar(message: string, action?: string) {
      this._snackBar.open(message, action);
  }
}
