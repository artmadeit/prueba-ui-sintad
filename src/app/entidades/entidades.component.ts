import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Entidad } from './entidad';

@Component({
  selector: 'app-entidades',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './entidades.component.html',
  styleUrl: './entidades.component.scss'
})
export class EntidadesComponent {
  displayedColumns: string[] = ['tipoDocumento', 'nroDocumento', 'razonSocial', 'nombreComercial', "tipoContribuyente"];
  dataSource: Entidad[] = []

}
