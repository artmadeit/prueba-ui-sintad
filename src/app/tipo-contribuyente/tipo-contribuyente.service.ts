import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TipoContribuyente } from './tipo-contribuyente';
import { Page } from '../common/page';

@Injectable({
    providedIn: 'root'
})
export class TipoContribuyenteService {
    baseUrl = `${environment.apiUrl}/tipo-contribuyentes`

    constructor(private http: HttpClient) { }

    create(tipoContribuyente: TipoContribuyente) {
        return this.http.post(this.baseUrl, tipoContribuyente);
    }

    findAll() {
        return this.http.get<Page<TipoContribuyente>>(this.baseUrl);
    }

    findById(id: number) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    edit(id: number, tipoContribuyente: TipoContribuyente) {
        return this.http.put(`${this.baseUrl}/${id}`, tipoContribuyente);
    }

    remove(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }

}
