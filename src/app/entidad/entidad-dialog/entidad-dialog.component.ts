import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-entidad-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './entidad-dialog.component.html',
  styleUrl: './entidad-dialog.component.scss'
})
export class EntidadDialogComponent {

}
