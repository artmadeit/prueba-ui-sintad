import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    // { path: 'second-component', component: SecondComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
];
