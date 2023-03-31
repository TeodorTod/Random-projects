import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-profile-component',
  templateUrl: './customer-profile-component.component.html',
  styleUrls: ['./customer-profile-component.component.scss']
})
export class CustomerProfileComponentComponent implements OnInit {

  currentId: string = '';
  customer!: IUser;
  loading!: boolean;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.currentId = params['id'];
      });
    this.loading = true;

    setTimeout(() => {

      this.customerService.$getUsersById(this.currentId).subscribe((user: any) => {
        this.customer = user;
        this.loading = false;
      })
    }, 1000)
  }


}
