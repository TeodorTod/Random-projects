import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('themeForm') themeForm!: NgForm;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.themeForm.setValue({
        theme: this.themeService.currentTheme
      })
    })

    this.themeForm.valueChanges?.subscribe(res => {
      if (res.theme) {
        console.log('theme changed', res);
        this.themeService.changeTheme(res.theme);
      }

    })
  }

}
