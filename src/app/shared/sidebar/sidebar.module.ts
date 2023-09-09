import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidebarComponent } from './components';
import { SidebarHandlerService } from './services';

@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [SidebarHandlerService],
})
export class SidebarModule {}
