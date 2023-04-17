
import { Component, Inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })

  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.invalid);
    this.isSubmitted = true;
  }

}
