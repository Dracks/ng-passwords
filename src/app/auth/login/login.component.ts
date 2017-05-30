import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username = environment.dev.username;
    password = environment.dev.password;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    login() {
        console.log("ping")
        this.authService.login(this.username, this.password).then(()=>{
            console.log('Shit!');
            this.router.navigate(['/']);
        })
    }

}
