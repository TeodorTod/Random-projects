import { Component, OnInit } from '@angular/core';
import { UsersDataSource } from '../../services/users.dataSource';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] =['id', 'name', 'age'];

  dataSource = new UsersDataSource(this.usersService)

  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.dataSource.loadUsers();
  }
}
