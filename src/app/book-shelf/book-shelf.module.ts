import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookShelfRoutingModule } from './book-shelf-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookShelfComponent } from './book-shelf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './popups/book-details/book-details.component';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [
    NavbarComponent,
    BookShelfComponent,
    SearchPageComponent,
    WishlistPageComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BookShelfRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
   entryComponents: [
    BookDetailsComponent
   ]
})
export class BookShelfModule { }
