import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  text: string = '';
  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
    console.log(target.value);
  }

  addTodo(): void {
    console.log('addtodo', this.text);
  }

}
