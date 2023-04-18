
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  reactiveForm = this.formBuilder.group({
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    gender: '',
    hobbies: ''
  })

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit() {
    console.log(this.reactiveForm.value);
    
  }

}
