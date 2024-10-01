import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent {
  @Input() message: any = {};
  @Input() index: number = -1;

  @Output() delete = new EventEmitter<number>();

  handleDelete() {
    this.delete.emit(this.index); 
  }

}
