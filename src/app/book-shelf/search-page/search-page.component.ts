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
  public searchTrem = new Subject<string>();
  public sub: Subscription;
	public searchResults: Book;
	public errorMessage: string;
  public pageinationItems: any;
  public page: any;
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
        if (e.target.value == '') {
          this.pageinationItems = []
        }
        return e.target.value;
      }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => {
       return this.searchService._search(term)
      }), 
      catchError((e) => {
        this.errorMessage = e;
        return throwError(e)
      })
    ).subscribe(v => {
      this.searchResults = v.items;
      this.pageinationItems = this.searchResults;
    })
  }
  
  pageEvent() {

  }
}
