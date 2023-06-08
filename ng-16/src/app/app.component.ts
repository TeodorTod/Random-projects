import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { AppService } from './app.service';

interface UserInterface {
  id: string,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = signal('');
  users = signal<UserInterface[]>([]);
  appService = inject(AppService);

  usersChangeEffect = effect(() => {
    console.log(this.users().length);
    
  })

  usersTotal = computed(() => this.users().length)

  ngOnInit(): void {
    this.appService.showNames();
    
    setTimeout(() => {
      // this.users.set([{id: '1', name: 'Gosho'}]);
      this.users.update(prevUsers => [...prevUsers, {id: '1', name: 'Gosho'}])
      console.log(this.users());
      
    }, 2000)
  }

  changeTitle(event: Event) {
    const title = (event.target as HTMLInputElement).value;

    this.title.set(title)
  }
}
