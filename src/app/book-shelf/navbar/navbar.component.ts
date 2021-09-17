import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userName:string;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.userName =  localStorage.getItem('userName');
  }

}
