import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GareIComponent } from './gare-i.component';

describe('GareIComponent', () => {
  let component: GareIComponent;
  let fixture: ComponentFixture<GareIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GareIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GareIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
