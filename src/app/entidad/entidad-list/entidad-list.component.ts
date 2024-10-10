import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Entidad } from '../entidad';
import { MatDialog } from '@angular/material/dialog';
import { EntidadDialogComponent } from '../entidad-dialog/entidad-dialog.component';

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

  readonly dialog = inject(MatDialog);

  showCreateModal() {
    const dialogRef = this.dialog.open(EntidadDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
      }
    });
  
  }
}
