import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-templates-form-demo',
  templateUrl: './templates-form-demo.component.html',
  styleUrls: ['./templates-form-demo.component.scss']
})
export class TemplatesFormDemoComponent implements AfterViewInit{

  @ViewChild('laptopForm') laptopForm!: NgForm;
  @ViewChild('processor') processor!: NgModel;

  operatingSystems: string[] = [
    'Windows 10', 
    'Linux', 
    'Mac OS' 
  ];

  ngAfterViewInit(): void {
    console.log(this.processor);
    
  }

  onSubmit() {
    console.log(this.laptopForm.value);
  }

}
