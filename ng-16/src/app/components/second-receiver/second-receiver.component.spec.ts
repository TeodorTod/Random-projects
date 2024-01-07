import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondReceiverComponent } from './second-receiver.component';

describe('SecondReceiverComponent', () => {
  let component: SecondReceiverComponent;
  let fixture: ComponentFixture<SecondReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondReceiverComponent]
    });
    fixture = TestBed.createComponent(SecondReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
