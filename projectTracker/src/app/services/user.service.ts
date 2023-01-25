import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isLoggedIn: boolean = false;
  returnUrl: string;

  validateUser(username: string, password: string): void {
    if (username == 'admin' && password == "admin") {
      this.isLoggedIn = true;
    }
  }
}
