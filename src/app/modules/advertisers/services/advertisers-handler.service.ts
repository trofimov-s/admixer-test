import { Injectable } from '@angular/core';
import { Advertiser } from '@core/models';
import { AdvertisersApiService } from '@core/services';
import { BehaviorSubject, Observable, filter, tap } from 'rxjs';

@Injectable()
export class AdvertisersHandlerService {
  private _advertisers$ = new BehaviorSubject<Advertiser[]>(null);

  get advertisers(): Advertiser[] {
    return this._advertisers$.getValue();
  }

  get advertisers$(): Observable<Advertiser[]> {
    return this._advertisers$.asObservable().pipe(filter(Boolean));
  }

  constructor(private advertisersApi: AdvertisersApiService) {}

  getAdvertisers(): Observable<Advertiser[]> {
    return this.advertisersApi.getAdvertisers().pipe(tap((res) => this._advertisers$.next(res)));
  }
}
