import { Injectable } from '@angular/core';
import { Advertiser } from '@core/models';
import { AdvertisersApiService } from '@core/services';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable()
export class AdvertisersHandlerService {
  private _advertisers$ = new BehaviorSubject<Advertiser[]>(null);

  constructor(private advertisersApi: AdvertisersApiService) {}

  getAdvertisers(): Observable<Advertiser[]> {
    return this.advertisersApi.getAdvertisers().pipe(tap((res) => this._advertisers$.next(res)));
  }
}
