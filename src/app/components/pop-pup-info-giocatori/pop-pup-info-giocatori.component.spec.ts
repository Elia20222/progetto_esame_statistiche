import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopPupInfoGiocatoriComponent } from './pop-pup-info-giocatori.component';

describe('PopPupInfoGiocatoriComponent', () => {
  let component: PopPupInfoGiocatoriComponent;
  let fixture: ComponentFixture<PopPupInfoGiocatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopPupInfoGiocatoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopPupInfoGiocatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
