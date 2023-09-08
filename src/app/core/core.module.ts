import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { IconModule } from '../shared/icon';
import { UserIDInterceptor } from './interceptors/user-id.interceptor';
import { AdvertisersApiService } from './services';

@NgModule({
  imports: [CommonModule, IconModule],
  providers: [
    ...IconModule.forRoot().providers,
    AdvertisersApiService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: UserIDInterceptor,
    },
  ],
})
export class CoreModule {}
