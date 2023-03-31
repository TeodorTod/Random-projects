import { Component, Input } from '@angular/core';
import { IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.scss']
})
export class CustomerListItemComponent {
  @Input() item!: IUser
}
