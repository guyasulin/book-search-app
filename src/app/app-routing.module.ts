import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {
    path:'book-shelf',
    loadChildren: () => import('./book-shelf/book-shelf.module').then(m => m.BookShelfModule)
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
