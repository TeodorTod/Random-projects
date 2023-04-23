import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EducationComponent } from './components/education/education.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ContactInfoComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ContactInfoComponent,
    EducationComponent
  ]
})
export class FeaturesModule { }
