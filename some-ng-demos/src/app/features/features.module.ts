import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EducationComponent } from './components/education/education.component';
import { MaterialModule } from '../material.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    ContactInfoComponent,
    EducationComponent,
    HomeComponent,
    JobSearchComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FeaturesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CarouselModule,
    FormsModule
  
  ],
  exports: [
    ContactInfoComponent,
    EducationComponent,
    HomeComponent,
    JobSearchComponent,
    TableComponent
  ]
})
export class FeaturesModule { }
