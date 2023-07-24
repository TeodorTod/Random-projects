import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { BookI } from '../../interfaces/book.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  bookService = inject(BookService);
  

 
}
