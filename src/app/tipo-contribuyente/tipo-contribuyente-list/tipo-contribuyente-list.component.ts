import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipoContribuyente } from '../tipo-contribuyente';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TipoContribuyenteDialogComponent } from '../tipo-contribuyente-dialog/tipo-contribuyente-dialog.component';

@Component({
  selector: 'app-tipo-contribuyente-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './tipo-contribuyente-list.component.html',
  styleUrl: './tipo-contribuyente-list.component.scss'
})
export class TipoContribuyenteListComponent {
  displayedColumns: string[] = ['nombre'];
  dataSource: TipoContribuyente[] = []

  readonly dialog = inject(MatDialog);

  showCreateModal() {
    const dialogRef = this.dialog.open(TipoContribuyenteDialogComponent, {
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
