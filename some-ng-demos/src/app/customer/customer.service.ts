import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit {

  customers: [] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

}
