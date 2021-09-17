import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public userName:string;

  constructor(public router:Router) { }
  ngOnInit(): void {
  }

  goSearchPage(){
    localStorage.setItem('userName', this.userName)
    this.router.navigate(['book-shelf/search-pase'])
}
}
