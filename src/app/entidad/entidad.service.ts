import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Page } from '../common/page';
import { Entidad } from './entidad';

@Injectable({
    providedIn: 'root'
})
export class EntidadService {
    baseUrl = `${environment.apiUrl}/entidades`

    constructor(private http: HttpClient) { }

    create(entidad: Entidad) {
        return this.http.post(this.baseUrl, this.toRequest(entidad));
    }

    findAll() {
        return this.http.get<Page<Entidad>>(this.baseUrl);
    }

    findById(id: number) {
        return this.http.get<Entidad>(`${this.baseUrl}/${id}`);
    }

    edit(id: number, entidad: Entidad) {
        return this.http.put(`${this.baseUrl}/${id}`, this.toRequest(entidad));
    }

    
    private toRequest(entidad: Entidad): any {
        return {
            tipoDocumentoId: entidad.tipoDocumento.id,
            nroDocumento: entidad.nroDocumento,
            razonSocial: entidad.razonSocial,
            nombreComercial: entidad.nombreComercial,
            tipoContribuyenteId: entidad.tipoContribuyente.id,
            telefono: entidad.telefono,
            direccion: entidad.direccion,
        };
    }

    remove(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }

}
