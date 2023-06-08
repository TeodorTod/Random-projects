import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  showNames() {
    console.log('Pesho', 'Gosho');
    
  }
}
