import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TipoContribuyenteForm } from '../tipo-contribuyente';

@Component({
  selector: 'app-tipo-contribuyente-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './tipo-contribuyente-dialog.component.html',
  styleUrl: './tipo-contribuyente-dialog.component.scss'
})
export class TipoContribuyenteDialogComponent {
  tipoContribuyenteForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    data: TipoContribuyenteForm,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TipoContribuyenteDialogComponent>) {

    this.tipoContribuyenteForm = this.formBuilder.group({
      nombre: [data.nombre, [Validators.required]],
    });
  }

  onSubmit() {
    this.dialogRef.close(this.tipoContribuyenteForm.value);
  }
}
