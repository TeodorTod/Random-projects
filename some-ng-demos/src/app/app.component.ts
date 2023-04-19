
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  reactiveForm = this.formBuilder.group({
    firstname: [, Validators.required],
    lastname: [, Validators.email],
    email: [, Validators.required],
    country: '',
    gender: '',
    hobbies: ''
  })

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit() {
    console.log(this.reactiveForm);
    
  }

}
