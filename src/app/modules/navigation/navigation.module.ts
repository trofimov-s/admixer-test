import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { NavigationComponent, NavigationLinkComponent } from './components';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [NavigationComponent, NavigationLinkComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {}
