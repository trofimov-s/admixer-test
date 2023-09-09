import { Injectable } from '@angular/core';
import { Advertiser, StatusResponse } from '@core/models';
import { AdvertisersApiService } from '@core/services';
import { BehaviorSubject, Observable, catchError, filter, of, tap } from 'rxjs';

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
    return this.advertisersApi.getAdvertisers().pipe(
      tap((res) => this._advertisers$.next(res)),
      catchError(() => of(null))
    );
  }

  updateAdvertiser(data: Advertiser): Observable<StatusResponse> {
    return this.advertisersApi.updateAdvertiser(data).pipe(
      tap(() => {
        const advertisers = this._advertisers$.getValue();
        const adv: Advertiser = advertisers.find(
          ({ advertiserId }) => advertiserId === data.advertiserId
        );

        adv.profit = data.profit;
        this._advertisers$.next(advertisers);
      })
    );
  }
}
