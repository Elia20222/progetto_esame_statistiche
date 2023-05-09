import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POPUPatletiComponent } from './popupatleti.component';

describe('POPUPatletiComponent', () => {
  let component: POPUPatletiComponent;
  let fixture: ComponentFixture<POPUPatletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POPUPatletiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POPUPatletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
