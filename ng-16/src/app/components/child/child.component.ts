import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {
  @Input() myCounter!: number;
  @Input() numbers!: number[];
  public changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges){
    for(const propname in changes) {
      const change: SimpleChange = changes[propname]; 
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);
      this.changeLog.push(
        `ngOnChanges ${propname}: currentValue = ${current}, previousValue = ${previous}, firtsChange = ${change.firstChange}`
      )
    }
  }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    console.log('Do check');
    this.changeLog.push(`ngDoCheck ${this.numbers.toString()}`)
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }
}
