import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string;
  password: string;

  constructor(private userService: UserService, private router: Router) {

  }

  loginUser() {
    this.userService.validateUser(this.userName, this.password);
    if (this.userService.isLoggedIn) {
      this.router.navigate([this.userService.returnUrl]);
    }


  }

}
