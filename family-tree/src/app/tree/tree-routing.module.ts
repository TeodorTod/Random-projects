import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeCanvasComponent } from './components/tree-canvas/tree-canvas.component';

const routes: Routes = [
  {
    path: '',
    component: TreeCanvasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
