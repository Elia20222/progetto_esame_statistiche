import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEOraComponent } from './data-eora.component';

describe('DataEOraComponent', () => {
  let component: DataEOraComponent;
  let fixture: ComponentFixture<DataEOraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEOraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEOraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
