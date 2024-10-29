import { Component, inject, OnInit } from '@angular/core';
import { AlertInterface } from './types/alert.interface';
import { AlertTypeEnum } from './types/alertType.enum';
import { CommonModule } from '@angular/common';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {
  alert?: AlertInterface;
  alertService = inject(AlertService);
  timeoutId?: number;

  ngOnInit(): void {
    this.alertService.getAlert().subscribe((alert) => {
      this.alert = alert;
      this.resetTimer();
    })
  }

  resetTimer(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => {
      this.alert = undefined
    }, 3000)
  }
}
