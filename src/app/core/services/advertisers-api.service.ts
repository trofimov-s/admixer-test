import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseApiService } from './base-api.service';
import { Advertiser } from '../models/advertiser.model';
import { StatusResponse } from '@core/models';

@Injectable()
export class AdvertisersApiService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getAdvertisers(): Observable<Advertiser[]> {
    return this.http.post<Advertiser[]>(
      this.buildUrl((e) => e.getTestAdvertisers),
      {}
    );
  }

  updateAdvertiser(body: Advertiser): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(
      this.buildUrl((e) => e.updateTestAdvertiser),
      body
    );
  }
}
