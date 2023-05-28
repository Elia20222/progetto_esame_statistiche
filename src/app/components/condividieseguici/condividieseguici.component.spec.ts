import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondividieseguiciComponent } from './condividieseguici.component';

describe('CondividieseguiciComponent', () => {
  let component: CondividieseguiciComponent;
  let fixture: ComponentFixture<CondividieseguiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondividieseguiciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondividieseguiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
