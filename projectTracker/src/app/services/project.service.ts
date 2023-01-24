import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url: string = 'https://localhost:7125/api/Projects';
  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url)
      .pipe(tap(data => console.log(data)),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return throwError(() => new Error(err.statusText));

        })
      );
  }

}
