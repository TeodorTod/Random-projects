import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EducationComponent } from './components/education/education.component';
import { MaterialModule } from '../material.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactInfoComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FeaturesRoutingModule,
    RouterModule
  ],
  exports: [
    ContactInfoComponent,
    EducationComponent,
  ]
})
export class FeaturesModule { }
