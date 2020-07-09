import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'https://localhost:44355/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CommentNewService {


  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }

  getAllCommentNew(): Observable<any> {
    return this.http.get(endpoint + 'CommentNew/GetAllCommentNew').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getAll'))
      );
  }

  getAllCommentNewUser(): Observable<any> {
    return this.http.get(endpoint + 'CommentNewUser/GetAllCommentNewUserActive').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getAllCommentNewUser'))
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