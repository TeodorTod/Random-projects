import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHomeComponent } from './our-home.component';

describe('OurHomeComponent', () => {
  let component: OurHomeComponent;
  let fixture: ComponentFixture<OurHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
