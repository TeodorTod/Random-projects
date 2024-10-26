import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  meetings = {
    '2024-10-10': ['Drink Combutcha', 'Learn React', 'Sleep'],
    '2024-10-11': ['Drink Combutcha', 'Learn Angular', 'Sleep'],
  }
}
