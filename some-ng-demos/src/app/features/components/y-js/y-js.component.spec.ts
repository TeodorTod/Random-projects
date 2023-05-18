import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YJsComponent } from './y-js.component';

describe('YJsComponent', () => {
  let component: YJsComponent;
  let fixture: ComponentFixture<YJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
