import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';



@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule
  ],
  exports: [UsersListComponent]
})
export class UsersListModule { }
