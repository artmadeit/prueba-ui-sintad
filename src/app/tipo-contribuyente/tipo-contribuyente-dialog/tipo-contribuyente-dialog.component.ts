import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tipo-contribuyente-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './tipo-contribuyente-dialog.component.html',
  styleUrl: './tipo-contribuyente-dialog.component.scss'
})
export class TipoContribuyenteDialogComponent {
  tipoContribuyenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<TipoContribuyenteDialogComponent>) {
    this.tipoContribuyenteForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.dialogRef.close(this.tipoContribuyenteForm.value);
  }
}
