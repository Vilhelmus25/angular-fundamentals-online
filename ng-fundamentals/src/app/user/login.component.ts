import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    userName: any
    password: any

    constructor(private authService: AuthService) {

    }

    login(formValues: any) {
        this.authService.loginuser(formValues.userName, formValues.password)
    }
}