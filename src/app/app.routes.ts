import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntidadListComponent } from './entidad/entidad-list/entidad-list.component';
import { PortalComponent } from './portal/portal.component';
import { TipoContribuyenteListComponent } from './tipo-contribuyente/tipo-contribuyente-list/tipo-contribuyente-list.component';
import { TipoDocumentoListComponent } from './tipo-documento/tipo-documento-list/tipo-documento-list.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: "portal",
        component: PortalComponent,
        children: [
            { path: 'entidades', component: EntidadListComponent },
            { path: 'tipo-documentos', component: TipoDocumentoListComponent },
            { path: 'tipo-contribuyentes', component: TipoContribuyenteListComponent },
        ],
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
