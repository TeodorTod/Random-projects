import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements AfterViewInit{

  @ViewChild('someInput') opaa!: ElementRef;
  ngAfterViewInit() {
    this.opaa.nativeElement.value = 'Whale!';
  }


}
