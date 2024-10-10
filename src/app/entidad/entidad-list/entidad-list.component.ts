import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
import { Entidad } from '../entidad';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-entidades',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './entidad-list.component.html',
  styleUrl: './entidad-list.component.scss'
})
export class EntidadListComponent {
  displayedColumns: string[] = ['tipoDocumento', 'nroDocumento', 'razonSocial', 'nombreComercial', "tipoContribuyente"];
  dataSource: Entidad[] = []

}
