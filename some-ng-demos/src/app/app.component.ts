
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    roleId: [1, Validators.required]
  })

  roles = [
    {id: 1, title: 'developer'},
    {id: 2, title: 'qa'},
  ]

  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe(roleId => {
      console.log(roleId)
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.invalid);
    this.isSubmitted = true;
  }

}
