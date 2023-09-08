import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { SearchComponent } from './components';

@NgModule({
  imports: [CommonModule, FormsModule, MatIconModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
