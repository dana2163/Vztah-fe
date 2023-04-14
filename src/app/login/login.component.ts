import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginData} from "../model/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: LoginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    // Add your logic here to communicate with the backend for authentication.
    // Based on the user role (teacher, student, or parent), you can navigate to the corresponding dashboard.
    // Example:
    // if (loggedIn && userRole === 'teacher') {
    //   this.router.navigate(['/teacher']);
    // }
  }
}
