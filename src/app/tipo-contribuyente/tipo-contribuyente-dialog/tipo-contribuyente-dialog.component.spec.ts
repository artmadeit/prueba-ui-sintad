import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContribuyenteDialogComponent } from './tipo-contribuyente-dialog.component';

describe('TipoContribuyenteDialogComponent', () => {
  let component: TipoContribuyenteDialogComponent;
  let fixture: ComponentFixture<TipoContribuyenteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoContribuyenteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoContribuyenteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
