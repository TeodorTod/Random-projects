import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerListItemComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [CustomerListComponent,
    CustomerListItemComponent]
})
export class CustomerModule { }
