import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product.interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  Products : IProduct[] = [
    {
      Id:"1",
      Title:"Pen",
      Price: 100,
      inStock: true 
    },
    {
      Id:"2",
      Title:"Pencil",
      Price: 200,
      inStock: false 
    },
    {
      Id:"3",
      Title:"Book",
      Price: 500,
      inStock: true 
    }
  ]

  Products$ : BehaviorSubject<IProduct[]>; 
  
  constructor() {
    this.Products$ = new BehaviorSubject<IProduct[]>(this.Products);
   }
  
   AddProduct(p: IProduct): void{
    this.Products.push(p);
    this.Products$.next(this.Products);
   }
}