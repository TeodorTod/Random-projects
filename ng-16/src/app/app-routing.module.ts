import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
