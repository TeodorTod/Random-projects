import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJsonPipe } from './my-json.pipe';



@NgModule({
  declarations: [MyJsonPipe],
  imports: [
    CommonModule,
  ],
  exports: [MyJsonPipe]
})
export class SharedModule { }
