import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-home',
  templateUrl: './our-home.component.html',
  styleUrls: ['./our-home.component.scss']
})
export class OurHomeComponent implements OnInit{

  constructor( private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    
  }
}
