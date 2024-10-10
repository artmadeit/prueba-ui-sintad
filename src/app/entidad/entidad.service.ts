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
        return this.http.post(this.baseUrl, entidad);
    }

    findAll() {
        return this.http.get<Page<Entidad>>(this.baseUrl);
    }

    findById(id: number) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    edit(id: number, entidad: Entidad) {
        return this.http.put(`${this.baseUrl}/${id}`, entidad);
    }

    remove(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }

}
