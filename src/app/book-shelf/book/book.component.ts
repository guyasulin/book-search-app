import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsComponent } from '../popups/book-details/book-details.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  @Input() pageinationItems;
  @Input() book;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogBook() {
    const dialogRef = this.dialog.open(BookDetailsComponent, {
      width: '400px',
      data: this.book,
      panelClass: 'epsSelectorPanel'
    });
  }
}
