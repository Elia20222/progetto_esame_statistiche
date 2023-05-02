import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunteggiovittoriaComponent } from './punteggiovittoria.component';

describe('PunteggiovittoriaComponent', () => {
  let component: PunteggiovittoriaComponent;
  let fixture: ComponentFixture<PunteggiovittoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunteggiovittoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunteggiovittoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
