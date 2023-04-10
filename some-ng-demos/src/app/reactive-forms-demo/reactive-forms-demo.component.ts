import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.scss']
})
export class ReactiveFormsDemoComponent {
  operatingSystems: string[] = [
    'Windows 10', 
    'Linux', 
    'Mac OS' 
  ];

  laptopGroup: FormGroup = this.formBuilder.group({
    processor: new FormControl('', [Validators.required, Validators.minLength(4)], []),
    ram: new FormControl(''),
    hardDisc: new FormControl(),
    os: new FormControl(),
  })

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit(): void {
    console.log(this.laptopGroup.controls );
    
  }

}
