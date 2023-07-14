import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  http = inject(HttpClient);
  searchSig = signal('');

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value
    console.log(value);
    
  }
  
}
