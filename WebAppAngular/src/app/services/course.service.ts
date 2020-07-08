import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { 
    
  }

  private extractData(res: Response) {
    let body = res;
    return body || { }; 
  }

  getCourses(): Observable<any> {
    return this.http.get(endpoint + 'apiCourse/getAllCourses').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getCourses'))
      );
  }

  addCourse (course): Observable<any> {
    console.log(course);
    return this.http.post<any>(endpoint + 'apiCourse/add/', JSON.stringify(course), httpOptions).pipe(
      tap((course) => console.log('added course')),
      catchError(this.handleError<any>('addCourse'))
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