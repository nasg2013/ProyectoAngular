import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { InquiryResponseModel } from '../models/InquiryResponse.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InquiryResponseService {

  private _url = 'https://demo-200709031357.azurewebsites.net/api/inquiryresponse/';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAll(): Observable<any> {
    return this.http.get(this._url + 'getAll').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getAll'))
      );
  }

  addInquiryResponse (inquiryResponse: InquiryResponseModel): Observable<any> {
    return this.http.post<any>(this._url, JSON.stringify(inquiryResponse), httpOptions).pipe(
      tap((inquiryResponse) => console.log('added inquiryResponse')),
      catchError(this.handleError<any>('error add inquiryResponse'))
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
