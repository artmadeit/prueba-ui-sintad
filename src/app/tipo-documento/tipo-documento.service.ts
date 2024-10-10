import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Page } from '../common/page';
import { TipoDocumento } from './tipo-documento';

@Injectable({
    providedIn: 'root'
})
export class TipoDocumentoService {
    baseUrl = `${environment.apiUrl}/tipo-documentos`

    constructor(private http: HttpClient) { }

    create(tipoDocumento: TipoDocumento) {
        return this.http.post(this.baseUrl, tipoDocumento);
    }

    findAll(nombre?: string) {
        return this.http.get<Page<TipoDocumento>>(this.baseUrl, { params: nombre ? { nombre } : {} });
    }

    findById(id: number) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    edit(id: number, tipoDocumento: TipoDocumento) {
        return this.http.put(`${this.baseUrl}/${id}`, tipoDocumento);
    }

    remove(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }

}
