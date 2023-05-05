import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GareEComponent } from './gare-e.component';

describe('GareEComponent', () => {
  let component: GareEComponent;
  let fixture: ComponentFixture<GareEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GareEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GareEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
