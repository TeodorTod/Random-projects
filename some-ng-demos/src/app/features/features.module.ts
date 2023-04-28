import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EducationComponent } from './components/education/education.component';
import { MaterialModule } from '../material.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    ContactInfoComponent,
    EducationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FeaturesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  
  ],
  exports: [
    ContactInfoComponent,
    EducationComponent,
    HomeComponent,
 
  ]
})
export class FeaturesModule { }
