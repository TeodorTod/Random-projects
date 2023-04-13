import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService, IUser } from '../customer.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  text = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('show some text');
    }, 3000)
  })

  private subscription!: Subscription

  customers: IUser[] = [];
  customers$!: Observable<IUser[]>

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    // this.subscription = this.customerService.getUsers$().subscribe(users => {
    //   this.customers = users;
    // })

    this.customers$ = this.customerService.getUsers$();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
