import { HttpClient } from '@angular/common/http';

export interface EndpointsConfig {
  getTestAdvertisers: string;
  updateTestAdvertisers: string;
}

const endpoints: EndpointsConfig = {
  getTestAdvertisers: 'GetTestAdvertisers',
  updateTestAdvertisers: 'UpdateTestAdvertisers',
};

export abstract class BaseApiService {
  private readonly URL_PATH = 'TestTask';

  constructor(protected http: HttpClient) {}

  protected buildUrl(endpointSelector: (e: EndpointsConfig) => string): string {
    return `${this.URL_PATH}/${endpointSelector(endpoints)}`;
  }
}
