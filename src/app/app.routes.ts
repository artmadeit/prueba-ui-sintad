import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntidadListComponent } from './entidad/entidad-list/entidad-list.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'entidades', component: EntidadListComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
];
