import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesComponent } from './matches.component';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesComponent]
    });
    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('two plus two', () => {
    expect(2 + 2).toBe(4);
  });

  it('object values', () => {
    const data = {name: "Pesho"};
    expect(data).toEqual({name: "Pesho"})
  });

  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
  });

  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(5);
  });

  it('not D in string', () => {
    expect('michurin').not.toMatch(/D/);
  });
});
