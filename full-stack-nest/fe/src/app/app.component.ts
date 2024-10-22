import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userService = inject(UserService);

  constructor() {
    const user = this.userService.getUserFromStorage();
    if (!user) {
      const randomNumber = Math.ceil(Math.random() * 4000 + 1000);
      const randomName = `user_${randomNumber}`;
      this.userService.createUser(randomName).subscribe((user) => {
        this.userService.saveUserToStorage(user);
      });
    }
  }
}
