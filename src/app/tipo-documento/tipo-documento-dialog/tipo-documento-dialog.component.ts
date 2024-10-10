import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TipoDocumento } from '../tipo-documento';

@Component({
  selector: 'app-tipo-documento-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './tipo-documento-dialog.component.html',
  styleUrl: './tipo-documento-dialog.component.scss'
})
export class TipoDocumentoDialogComponent {
  tipoDocumentoForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    data: TipoDocumento,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TipoDocumentoDialogComponent>) {

    this.tipoDocumentoForm = this.formBuilder.group({
      codigo: [data.codigo, [Validators.required]],
      nombre: [data.nombre, [Validators.required]],
      descripcion: [data.nombre],
    });
  }

  onSubmit() {
    this.dialogRef.close(this.tipoDocumentoForm.value);
  }
}
