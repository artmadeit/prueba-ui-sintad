import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { TipoDocumento } from '../../tipo-documento/tipo-documento';
import { TipoContribuyenteService } from '../../tipo-contribuyente/tipo-contribuyente.service';
import { Page } from '../../common/page';
import { TipoDocumentoService } from '../../tipo-documento/tipo-documento.service';
import { TipoContribuyente } from '../../tipo-contribuyente/tipo-contribuyente';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-entidad-dialog',
  standalone: true,
  imports: [
    MatDialogModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule,
    AsyncPipe,
    ReactiveFormsModule],
  templateUrl: './entidad-dialog.component.html',
  styleUrl: './entidad-dialog.component.scss'
})
export class EntidadDialogComponent {
  entidadForm = this.formBuilder.group({
    tipoDocumento: ['', [Validators.required]],
    nroDocumento: ['', [Validators.required]],
    razonSocial: ['', [Validators.required]],
    nombreComercial: ['', [Validators.required]],
    tipoContribuyente: ['', [Validators.required]],
  });
  tipoDocumentos$: Observable<TipoDocumento[]>
  tipoContribuyentes$: Observable<TipoContribuyente[]>

  constructor(
    // @Inject(MAT_DIALOG_DATA)
    // data: TipoContribuyenteForm,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EntidadDialogComponent>,
    private tipoContribuyenteService: TipoContribuyenteService,
    private tipoDocumentoService: TipoDocumentoService
  ) {

    this.tipoDocumentos$ = this.entidadForm.controls["tipoDocumento"].valueChanges.pipe(
      startWith(''),
      switchMap((value: any) => {
        const nombre = typeof value === 'string' ? value : value?.nombre;
        return this.tipoDocumentoService.findAll(nombre)
      }),
      map(x => x.content),
    );

    this.tipoContribuyentes$ = this.entidadForm.controls["tipoContribuyente"].valueChanges.pipe(
      startWith(''),
      switchMap((value: any) => {
        const nombre = typeof value === 'string' ? value : value?.nombre;
        return this.tipoContribuyenteService.findAll(nombre)
      }),
      map(x => x.content),
    );
  }

  showNombre(object: { nombre: string }): string {
    return object && object.nombre ? object.nombre : '';
  }

  onSubmit() {
    this.dialogRef.close(this.entidadForm.value);
  }
}
