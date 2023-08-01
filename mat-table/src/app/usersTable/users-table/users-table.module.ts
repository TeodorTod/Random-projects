import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from '../components/users-table/users-table.component';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from '../services/users.service';
import { UsersDataSource } from '../services/users.dataSource';



@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [UsersTableComponent],
  providers: [UsersService, UsersDataSource]
})
export class UsersTableModule { }
