import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { filter, Observable, switchMap } from 'rxjs';
import { Page } from '../../common/page';
import { MatDialog } from '@angular/material/dialog';
import { TipoDocumento } from '../tipo-documento';
import { TipoDocumentoService } from '../tipo-documento.service';
import { TipoDocumentoDialogComponent } from '../tipo-documento-dialog/tipo-documento-dialog.component';

@Component({
  selector: 'app-tipo-documento-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, AsyncPipe],
  templateUrl: './tipo-documento-list.component.html',
  styleUrl: './tipo-documento-list.component.scss'
})
export class TipoDocumentoListComponent {
  displayedColumns: string[] = ['nombre', 'codigo', 'descripcion', 'actions'];
  dataSource$!: Observable<Page<TipoDocumento>>;

  readonly dialog = inject(MatDialog);

  constructor(private tipoDocumentoService: TipoDocumentoService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.dataSource$ = this.tipoDocumentoService.findAll();
  }

  showCreateModal() {
    const dialogRef = this.dialog.open(TipoDocumentoDialogComponent, { data: {
      codigo: "",
      nombre: "",
      descripcion: ""
    }});

    dialogRef.afterClosed()
      .pipe(
        filter(result => Boolean(result)),
        switchMap(result => this.tipoDocumentoService.create(result)))
      .subscribe(result => {
        this.fetchData()
        alert("Registrado exitosamente")
      });
  }

  remove(item: TipoDocumento) {
    this.tipoDocumentoService.remove(item.id).subscribe(() => {
      alert("Eliminado exitosamente")
      this.fetchData()
    })
  }

  showEditModal(tipoDocumento: TipoDocumento) {
    const dialogRef = this.dialog.open(TipoDocumentoDialogComponent, {
      data: tipoDocumento,
    });

    dialogRef.afterClosed()
      .pipe(
        filter(result => Boolean(result)),
        switchMap(result => this.tipoDocumentoService.edit(tipoDocumento.id, result)))
      .subscribe(result => {
        this.fetchData()
        alert("Editado exitosamente")
      });
  }
}
