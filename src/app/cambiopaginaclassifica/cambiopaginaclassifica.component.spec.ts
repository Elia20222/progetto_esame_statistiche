import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiopaginaclassificaComponent } from './cambiopaginaclassifica.component';

describe('CambiopaginaclassificaComponent', () => {
  let component: CambiopaginaclassificaComponent;
  let fixture: ComponentFixture<CambiopaginaclassificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiopaginaclassificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiopaginaclassificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
