import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileComponentComponent } from './customer-profile-component.component';

describe('CustomerProfileComponentComponent', () => {
  let component: CustomerProfileComponentComponent;
  let fixture: ComponentFixture<CustomerProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
