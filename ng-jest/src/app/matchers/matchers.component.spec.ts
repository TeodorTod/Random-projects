import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchersComponent]
    });
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('2 + 2', () => {
    expect(2).toEqual(2);
  });

  it('Object values', () => {
    const data = { name: 'Gosho' };
    expect(component.ngOnInit).toBeTruthy()
  });
});
