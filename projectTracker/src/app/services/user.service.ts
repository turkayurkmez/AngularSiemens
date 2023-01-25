import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isLoggedIn: boolean = false;
  returnUrl: string;
  token: string | null = "";

  validateUser(username: string, password: string): void {
    if (username == 'admin' && password == "admin") {
      this.isLoggedIn = true;
      this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
      localStorage.setItem('jwt', this.token);
    }
  }

  logOff() {
    this.isLoggedIn = false;
  }

  getTokenFromStorage() {
    this.token = localStorage.getItem('jwt');
  }
}
