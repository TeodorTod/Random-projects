import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from "./alert/alert.component";
import { AlertService } from './alert/services/alert.service';
import { AlertTypeEnum } from './alert/types/alertType.enum';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  alertTypes = AlertTypeEnum;
  alertService = inject(AlertService);

  showAlert(type: AlertTypeEnum) {
    this.alertService.setAlert({
      type,
      text: 'THis is our test alert',
    });
  }
}
