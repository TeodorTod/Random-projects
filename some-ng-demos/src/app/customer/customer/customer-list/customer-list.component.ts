import { Component } from '@angular/core';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {

  

  constructor (private customerService: CustomerService) {
   
  }



}
