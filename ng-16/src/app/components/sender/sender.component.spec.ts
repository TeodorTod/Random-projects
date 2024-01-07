import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderComponent } from './sender.component';

describe('SenderComponent', () => {
  let component: SenderComponent;
  let fixture: ComponentFixture<SenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenderComponent]
    });
    fixture = TestBed.createComponent(SenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
