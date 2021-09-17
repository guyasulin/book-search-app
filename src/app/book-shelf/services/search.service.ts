import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  public searchResults: any;
  
  constructor(private http: HttpClient) { }

  searchBooks(term, pageNumber:number = 1): Observable<any> {
    if (term === '') {
      console.log('Not Found');
      return empty()
    } else {
      let params = term
      return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${params}&maxResults=20&startIndex=${(pageNumber - 1)*20}`).pipe(
        map(res => {
          console.log(res);
          return this.searchResults = res
        })
      )
    }
  }

  _search(term) {
    return this.searchBooks(term)
  }
}
