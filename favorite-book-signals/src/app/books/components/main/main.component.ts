import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  formBuilder = inject(FormBuilder);
  

  submitBook() {
    console.log(this.bookForm.value);
    
  }

  bookForm = new FormGroup({
    author: new FormControl(''),
    name: new FormControl(''),
    yearOfWrite: new FormControl()
  });


}
