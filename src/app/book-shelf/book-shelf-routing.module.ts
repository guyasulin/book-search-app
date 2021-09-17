import { SearchPageComponent } from './search-page/search-page.component';
import { BookShelfComponent } from './book-shelf.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path:'', 
  component:BookShelfComponent,
  children: [
    {path:'search-pase', component:SearchPageComponent},   
    {path:'wishlist', component:WishlistPageComponent},   
  ]
},   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookShelfRoutingModule { }
