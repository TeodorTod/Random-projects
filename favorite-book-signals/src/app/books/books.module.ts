import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BookService } from './services/book.service';



@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    MainComponent,
    FooterComponent,
    SidenavComponent
  ],
  providers: [BookService]
})
export class BooksModule { }
