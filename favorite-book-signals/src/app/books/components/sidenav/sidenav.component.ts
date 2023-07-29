import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { BookI } from '../../interfaces/book.interface';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  bookService = inject(BookService);
  dialog = inject(MatDialog);

  
  onDelete(id: any) {
    this.bookService.removeBook(id);
  }

  openDialog(book: any) {
    const bookFromSignal = book;
    
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '640px',
      height: '326px',
      hasBackdrop: true,
      data: {bookFromSignal}
    });
  }
 
}
