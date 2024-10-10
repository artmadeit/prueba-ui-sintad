import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Page } from '../../common/page';
import { Entidad } from '../entidad';
import { EntidadDialogComponent } from '../entidad-dialog/entidad-dialog.component';
import { EntidadService } from '../entidad.service';

@Component({
  selector: 'app-entidades',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, AsyncPipe],
  templateUrl: './entidad-list.component.html',
  styleUrl: './entidad-list.component.scss'
})
export class EntidadListComponent {
  displayedColumns: string[] = ['tipoDocumento', 'nroDocumento', 'razonSocial', 'nombreComercial', "tipoContribuyente", "actions"];
  dataSource$!: Observable<Page<Entidad>>;

  readonly dialog = inject(MatDialog);

  constructor(private entidadService: EntidadService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.dataSource$ = this.entidadService.findAll();
  }

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

  remove(item: Entidad) {
    this.entidadService.remove(item.id).subscribe(() => {
      alert("Eliminado exitosamente")
      this.fetchData()
    })
  }

}
