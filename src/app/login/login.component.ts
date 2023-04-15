import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from "../model/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: LoginData = {
    email: '',
    password: '',
    role: '',
  };

  constructor(private router: Router) {}

  onRoleChange(event: any) {
    console.log(event.target.value); // выводит выбранное значение роли в консоль
  }

  onLogin() {
    // Add your logic here to communicate with the backend for authentication.
    // Example:
    // if (loggedIn && userRole === 'teacher') {
    //   this.router.navigate(['/teacher']);
    // }

    // Проверяем роль пользователя и перенаправляем его на соответствующую страницу
    if (this.loginData.role === 'teacher') {
      this.router.navigate(['/teacher']);
    } else if (this.loginData.role === 'parent') {
      this.router.navigate(['/parent']);
    }
  }
}
