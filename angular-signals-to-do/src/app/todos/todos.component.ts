import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './todos.component.html',
})
export class TodosComponent {

}
