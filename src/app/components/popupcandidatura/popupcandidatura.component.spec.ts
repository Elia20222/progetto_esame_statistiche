import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcandidaturaComponent } from './popupcandidatura.component';

describe('PopupcandidaturaComponent', () => {
  let component: PopupcandidaturaComponent;
  let fixture: ComponentFixture<PopupcandidaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupcandidaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupcandidaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
