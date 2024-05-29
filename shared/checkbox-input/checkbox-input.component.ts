import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css'],
  standalone:true,
  imports:[CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxInputComponent),
      multi: true
    }
  ]
})
export class CheckboxInputComponent implements ControlValueAccessor {
  @Input() label: any;
  @Input() options: any;

  value: any[] = [];
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {}

  writeValue(obj: any[]): void {
    this.value = obj || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }



  onCheckboxChange(option: any, event: Event): void {
    if ((event.target as HTMLInputElement).checked) {
      this.value.push(option.value);
    } else {
      this.value = this.value.filter(x => x !== option.value);
    }
    this.onChange(this.value);
    this.onTouch();
  }
}
