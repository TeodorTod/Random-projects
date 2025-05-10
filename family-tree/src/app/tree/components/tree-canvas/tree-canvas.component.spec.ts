import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCanvasComponent } from './tree-canvas.component';

describe('TreeCanvasComponent', () => {
  let component: TreeCanvasComponent;
  let fixture: ComponentFixture<TreeCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
