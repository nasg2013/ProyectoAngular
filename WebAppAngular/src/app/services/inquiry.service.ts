import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { InquiryModel } from '../models/Inquiry.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class InquiryService {

  private _url = 'http://localhost:8080/api/inquiry/';
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  addInquiry (inquiry: InquiryModel): Observable<any> {
    return this.http.post<any>(this._url, JSON.stringify(inquiry), httpOptions).pipe(
      tap((inquiry) => console.log('added inquiry')),
      catchError(this.handleError<any>('addInquiry'))
    );
  }

  getAll(): Observable<any> {
    return this.http.get(this._url + 'getAll').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('no inquiries'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
	  
		  // TODO: send the error to remote logging infrastructure
		  console.error(error); // log to console instead
	  
		  // TODO: better job of transforming error for user consumption
		  console.log(`${operation} failed: ${error.message}`);
	  
		  // Let the app keep running by returning an empty result.
		  return of(result as T);
		};
	  }

}
