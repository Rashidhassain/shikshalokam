import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmaicFormControlComponent } from './dynmaic-form-control.component';

describe('DynmaicFormControlComponent', () => {
  let component: DynmaicFormControlComponent;
  let fixture: ComponentFixture<DynmaicFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynmaicFormControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynmaicFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
