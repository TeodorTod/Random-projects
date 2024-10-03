import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getAllProductsWithLimit(limit: number = 5): Observable<ProductModel[        ]> {
    const productUrl = `${this.baseUrl}/products?limit=${limit}`
    return this.http.get<ProductModel[]>(productUrl)
  }
}
