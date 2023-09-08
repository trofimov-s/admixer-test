import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseApiService } from './base-api.service';
import { Observable, catchError, of } from 'rxjs';
import { Advertiser } from '../models/advertiser.model';

@Injectable()
export class AdvertisersApiService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getAdvertisers(): Observable<Advertiser[]> {
    return this.http
      .post<Advertiser[]>(
        this.buildUrl((e) => e.getTestAdvertisers),
        {}
      )
      .pipe(catchError(() => of(null)));
  }
}
