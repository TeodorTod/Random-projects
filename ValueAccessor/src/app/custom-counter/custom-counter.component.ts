import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCounterComponent),
      multi: true,
    },
  ],
})
export class CustomCounterComponent implements OnInit, ControlValueAccessor {
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: number): void {
    this.counter = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onTouch = (): void => {};
  onChange = (val: number) => {};

  updateCounter(increament = true) {
    increament ? this.counter++ : this.counter--;
    this.onChange(this.counter);
  }
}