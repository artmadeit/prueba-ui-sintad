import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { TipoContribuyente } from '../tipo-contribuyente';
import { TipoContribuyenteDialogComponent } from '../tipo-contribuyente-dialog/tipo-contribuyente-dialog.component';
import { TipoContribuyenteService } from '../tipo-contribuyente.service';
import { Page } from '../../common/page';

@Component({
  selector: 'app-tipo-contribuyente-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, AsyncPipe],
  templateUrl: './tipo-contribuyente-list.component.html',
  styleUrl: './tipo-contribuyente-list.component.scss'
})
export class TipoContribuyenteListComponent {
  displayedColumns: string[] = ['nombre'];
  dataSource$!: Observable<Page<TipoContribuyente>>;

  readonly dialog = inject(MatDialog);

  constructor(private tipoContribuyenteService: TipoContribuyenteService) {}

  ngOnInit(): void {
    this.dataSource$ = this.tipoContribuyenteService.findAll();
  }

  showCreateModal() {
    const dialogRef = this.dialog.open(TipoContribuyenteDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.tipoContribuyenteService.create(result);
      }
    });  
  }
}
