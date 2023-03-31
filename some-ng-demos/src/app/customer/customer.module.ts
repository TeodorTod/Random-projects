import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';
import { RouterModule } from '@angular/router';
import { CustomerProfileComponentComponent } from './customer-profile-component/customer-profile-component.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerListItemComponent,
    CustomerProfileComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [CustomerListComponent,
    CustomerListItemComponent,
    CustomerProfileComponentComponent
  ]
})
export class CustomerModule { }
