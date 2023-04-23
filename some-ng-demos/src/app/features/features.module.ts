import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EducationComponent } from './components/education/education.component';



@NgModule({
  declarations: [
    ContactInfoComponent,
    EducationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactInfoComponent,
    EducationComponent
  ]
})
export class FeaturesModule { }
