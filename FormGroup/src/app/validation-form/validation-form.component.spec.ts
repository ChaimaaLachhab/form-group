import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFormComponent } from './validation-form.component';

describe('ValidationFormComponent', () => {
  let component: ValidationFormComponent;
  let fixture: ComponentFixture<ValidationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
