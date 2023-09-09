import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [InputComponent],
  exports: [InputComponent, FormsModule, ReactiveFormsModule],
})
export class InputModule {}
