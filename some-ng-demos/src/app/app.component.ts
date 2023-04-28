
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, filter, find, from, interval, map, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor(public router: Router) {

  }

  ngOnInit(): void {

  }

  images = [
    {path: '../assets/images/Group 974.png'},
    {path: '../assets/images/Group 976.png'},
    {path: '../assets/images/Group 982.png'},
]

}
