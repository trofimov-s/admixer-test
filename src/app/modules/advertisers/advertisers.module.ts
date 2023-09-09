import { CommonModule } from '@angular/common';
import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';

import { SearchModule } from '@modules/search';
import { AdvertisersComponent, EditAdvertiserComponent } from './components';
import { TableModule } from '@shared/table';
import { AdvertisersHandlerService } from './services';
import { Advertiser } from '@core/models';

const routes: Routes = [
  {
    path: '',
    component: AdvertisersComponent,
    resolve: {
      advertisers: (): Observable<Advertiser[]> | Advertiser[] => {
        const advHandler = inject(AdvertisersHandlerService);

        return advHandler.advertisers ?? advHandler.getAdvertisers();
      },
    },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SearchModule, TableModule],
  declarations: [AdvertisersComponent, EditAdvertiserComponent],
  providers: [AdvertisersHandlerService],
})
export class AdvertisersModule {}
