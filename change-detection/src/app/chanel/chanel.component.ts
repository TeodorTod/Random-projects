import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.scss']
})
export class ChanelComponent {
  @Input() name = '';
}
