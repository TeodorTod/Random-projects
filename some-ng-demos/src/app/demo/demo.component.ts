import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnDestroy, OnInit {
  @Input() demo: any;


  ngOnDestroy(): void {
    console.log('end is here');
    
  }
  ngOnInit(): void {
    console.log(this.demo);
    
  }
}
