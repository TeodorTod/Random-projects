import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers(10).subscribe((res) => {
      console.log(res)
    })
  }
}
