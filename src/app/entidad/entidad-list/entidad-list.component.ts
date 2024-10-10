import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { filter, Observable, switchMap } from 'rxjs';
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
  displayedColumns: string[] = ['razonSocial', 'nombreComercial', 'tipoDocumento', 'nroDocumento', "tipoContribuyente", "actions"];
  dataSource$!: Observable<Page<Entidad>>;

  readonly dialog = inject(MatDialog);

  constructor(private entidadService: EntidadService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.dataSource$ = this.entidadService.findAll();
  }

  remove(item: Entidad) {
    this.entidadService.remove(item.id).subscribe(() => {
      alert("Eliminado exitosamente")
      this.fetchData()
    })
  }

  showCreateModal() {
    const dialogRef = this.dialog.open(EntidadDialogComponent, {
      data: {
        tipoDocumento: "",
        nroDocumento: "",
        razonSocial: "",
        nombreComercial: "",
        tipoContribuyente: "",
        direccion: "",
        telefono: ""
      },
      autoFocus: false,
      minWidth: "80vw"
    });

    dialogRef.afterClosed()
      .pipe(
        filter(result => Boolean(result)),
        switchMap(result => this.entidadService.create(result)))
      .subscribe(result => {
        this.fetchData()
        alert("Registrado exitosamente")
      });
  }

  showEditModal(entidadRow: Entidad) {
    this.entidadService.findById(entidadRow.id).subscribe(entidad => {
      const dialogRef = this.dialog.open(EntidadDialogComponent, {
        data: entidad,
        autoFocus: false,
        minWidth: "80vw"
      });

      dialogRef.afterClosed()
        .pipe(
          filter(result => Boolean(result)),
          switchMap(result => this.entidadService.edit(entidad.id, result)))
        .subscribe(result => {
          this.fetchData()
          alert("Editado exitosamente")
        });
    })
  }

}
