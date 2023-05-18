import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { HomeComponent } from './components/home/home.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { TableComponent } from './components/table/table.component';
import { YJsComponent } from './components/y-js/y-js.component';


export const FeaturesRoutingModule = RouterModule.forChild([
  { path: 'education', component: EducationComponent },
  { path: 'contact-info', component: ContactInfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'job-search', component: JobSearchComponent },
  { path: 'table', component: TableComponent },
  { path: 'add-info', component: YJsComponent },
])
