import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  url: string = 'https://localhost:7125/api/Departments';
  constructor(private httpClient: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url)
      .pipe(tap(data => console.log(data)),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return throwError(() => new Error(err.statusText));

        })
      );
  }

  addDepartment(department: Department): Observable<Department> {

    return this.httpClient.post<Department>(this.url, department)
      .pipe(tap(data => console.log(data)),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return throwError(() => new Error(err.statusText));

        })
      );
  }


}
