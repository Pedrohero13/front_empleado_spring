import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, ReplaySubject, throwError } from 'rxjs';
import { user } from './authAPI';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  empleado: BehaviorSubject<user> = new BehaviorSubject<user>({
    userName: "",
    password: ""
  });

  saveUserToLocalStorage(user: user) {
    this.empleado.next(user);
    localStorage.setItem('user-profile', JSON.stringify(user));
  }
  login(user: user): Observable<any> {

    return this.httpClient.post("http://localhost:8000/api/user/login", user);
  }


}
