import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesFormDemoComponent } from './templates-form-demo.component';

describe('TemplatesFormDemoComponent', () => {
  let component: TemplatesFormDemoComponent;
  let fixture: ComponentFixture<TemplatesFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesFormDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
