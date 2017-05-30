import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth.service';
import { IdentifiedService } from './guard/identified.service';

@NgModule({
  imports: [
    CommonModule,
    LoginModule
  ],
  declarations: [],
  providers: [
      AuthService,
      IdentifiedService
  ]
})
export class AuthModule { }
