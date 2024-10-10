import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { filter, Observable, switchMap } from 'rxjs';
import { Page } from '../../common/page';
import { TipoContribuyente } from '../tipo-contribuyente';
import { TipoContribuyenteDialogComponent } from '../tipo-contribuyente-dialog/tipo-contribuyente-dialog.component';
import { TipoContribuyenteService } from '../tipo-contribuyente.service';

@Component({
  selector: 'app-tipo-contribuyente-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, AsyncPipe],
  templateUrl: './tipo-contribuyente-list.component.html',
  styleUrl: './tipo-contribuyente-list.component.scss'
})
export class TipoContribuyenteListComponent {
  displayedColumns: string[] = ['nombre', 'actions'];
  dataSource$!: Observable<Page<TipoContribuyente>>;

  readonly dialog = inject(MatDialog);

  constructor(private tipoContribuyenteService: TipoContribuyenteService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.dataSource$ = this.tipoContribuyenteService.findAll();
  }

  showCreateModal() {
    const dialogRef = this.dialog.open(TipoContribuyenteDialogComponent, {
      data: {
        nombre: ""
      },
    });

    dialogRef.afterClosed()
      .pipe(
        filter(result => Boolean(result)),
        switchMap(result => this.tipoContribuyenteService.create(result)))
      .subscribe(result => {
        this.fetchData()
        alert("Registrado exitosamente")
      });
  }

  remove(item: TipoContribuyente) {
    this.tipoContribuyenteService.remove(item.id).subscribe(() => {
      alert("Eliminado exitosamente")
      this.fetchData()
    })
  }

  showEditModal(tipoContribuyente: TipoContribuyente) {
    const dialogRef = this.dialog.open(TipoContribuyenteDialogComponent, {
      data: tipoContribuyente,
    });

    dialogRef.afterClosed()
      .pipe(
        filter(result => Boolean(result)),
        switchMap(result => this.tipoContribuyenteService.edit(tipoContribuyente.id, result)))
      .subscribe(result => {
        this.fetchData()
        alert("Editado exitosamente")
      });
  }
}
