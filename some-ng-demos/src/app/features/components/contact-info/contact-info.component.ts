import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {

  constructor (private formBuilder: FormBuilder) {

  }

  contactForm = this.formBuilder.group({
    firstName: ['', Validators.required, Validators.minLength(2)],
    lastName: '',
    dateOfBirth: '',
    phone: '',
    fromUK: ''
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
