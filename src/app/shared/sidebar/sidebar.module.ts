import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { SidebarComponent } from './components';
import { SidebarHandlerService } from './services';
import { ButtonModule } from '@shared/button';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatIconModule, ButtonModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [SidebarHandlerService],
})
export class SidebarModule {}
