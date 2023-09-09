import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { InformDialogComponent } from './components';
import { ButtonModule } from '@shared/button';

@NgModule({
  imports: [CommonModule, MatDialogModule, ButtonModule],
  declarations: [InformDialogComponent],
  exports: [InformDialogComponent, MatDialogModule],
})
export class ModalModule {}
