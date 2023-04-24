import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';


export const FeaturesRoutingModule = RouterModule.forChild([
  {
    path: 'education', component: EducationComponent
  },
  {
    path: 'contact-info', component: ContactInfoComponent
  }
])
