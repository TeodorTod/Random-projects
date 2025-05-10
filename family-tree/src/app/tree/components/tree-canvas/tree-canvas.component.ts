import { Component, OnInit } from '@angular/core';
import { Node, Edge } from '@swimlane/ngx-graph';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tree-canvas',
  standalone: false,
  templateUrl: './tree-canvas.component.html',
  styleUrl: './tree-canvas.component.scss'
})
export class TreeCanvasComponent implements OnInit {
  items: MenuItem[] | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Добавете брат',
        icon: 'pi pi-user',
        styleClass: 'male-item'
      },
      {
        label: 'Добавете сестра',
        icon: 'pi pi-user',
        styleClass: 'female-item'
      },
      {
        label: 'Добавете партньор',
        icon: 'pi pi-heart',
        styleClass: 'partner-item'
      },
      {
        label: 'Добавете син',
        icon: 'pi pi-user',
        styleClass: 'male-item'
      },
      {
        label: 'Добавете дъщеря',
        icon: 'pi pi-user',
        styleClass: 'female-item'
      }
    ];
    
  }

}
