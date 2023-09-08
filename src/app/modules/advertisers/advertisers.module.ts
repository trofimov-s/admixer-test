import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchModule } from '@modules/search';
import { AdvertisersComponent } from './components';
import { TableModule } from '@modules/table';
import { AdvertisersHandlerService } from './services';

const routes: Routes = [
  {
    path: '',
    component: AdvertisersComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SearchModule, TableModule],
  declarations: [AdvertisersComponent],
  providers: [AdvertisersHandlerService],
})
export class AdvertisersModule {}
