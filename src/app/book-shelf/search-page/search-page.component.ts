import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, Subscription, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Book } from '../model/book';
import { SearchService } from '../services/search.service';

@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.component.html',
	styleUrls: [ './search-page.component.scss' ]
})
export class SearchPageComponent implements OnInit {
	public loadin: boolean;
  public searchTrem = new Subject<string>();
  public sub: Subscription;
	public searchResults: Book;
	public errorMessage: string;
  public pageinationItems: any;
	public searchForm = new FormGroup({
		search: new FormControl('')
  });
  
	constructor(private searchService: SearchService) {}

	ngOnInit(): void {
    this.search()
  }

	search() {
		this.searchTrem.pipe(
      map((e:any) => {
        console.log(e.target.value);
        return e.target.value;
      }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => {
       return this.searchService._search(term)
      }), 
      catchError((e) => {
        console.log(e);
        
        return throwError(e)
      })
    ).subscribe(v => {
      if (v.totalItems == 0) {
        
      }
      this.searchResults = v.items;
      this.pageinationItems = this.pageinationItems;
      console.log(v);
    })
  }
  
  pageEvent() {

  }
}
