import {  CdkDropListGroup, CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { data } from 'src/app/data';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  users = data;

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    
  }
}
