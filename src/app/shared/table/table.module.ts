import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './components';

@NgModule({
  imports: [CommonModule, MatTableModule, MatSortModule],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
