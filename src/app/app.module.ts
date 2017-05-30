import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import Routes from './config/app.routes';
import { RestModule, ConfigBase } from "libs/ng-data-rest";

import RestConfig from "./config/rest.config";
import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import { LoginModule } from "./auth/login/login.module";
import { MainModule } from './main/main.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Routes,
        AuthModule,
        LoginModule,
        RestModule,
        MainModule
    ],
    providers: [
        {provide: ConfigBase, useClass: RestConfig }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
