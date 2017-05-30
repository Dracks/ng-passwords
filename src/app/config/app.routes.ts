import { RouterModule } from '@angular/router';
import { LoginComponent } from "app/auth/login/login.component";
import { IdentifiedService } from 'app/auth/guard/identified.service'
import { MainComponent } from 'app/main/main.component';


const Routes = RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: '', component: MainComponent, canActivate: [IdentifiedService]},
    { path: '**', redirectTo: 'login' }
])

export default Routes
