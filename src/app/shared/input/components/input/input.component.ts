import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  value: string;
  changed: (value: string) => void;
  touched: () => void;
  disabled: boolean;

  @Input()
  set isDisabled(v: boolean) {
    this.setDisabledState(v);
  }

  @Input()
  fieldName: string;

  @Input()
  label: string;

  @Input()
  placeholder = '';

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected onChanged(event: Event): void {
    this.value = (<HTMLInputElement>event.target).value;
    this.changed(this.value);
  }
}
