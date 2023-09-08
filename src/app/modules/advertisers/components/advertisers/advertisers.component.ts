import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { skip } from 'rxjs';

import { AdvertisersHandlerService } from '../../services';
import { Advertiser } from '@core/models';
import { SubscriptionDetacher } from '@core/utils';
import { TableCol } from '@shared/table';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisersComponent implements OnInit, OnDestroy {
  private detacher = new SubscriptionDetacher();
  searchValue: string;

  @Input() advertisers: Advertiser[];

  cols: TableCol<Advertiser>[] = [
    {
      key: 'advertiserId',
      text: 'Advertiser ID',
    },
    {
      key: 'name',
      text: 'Name',
    },
    {
      key: 'profit',
      text: 'Profit',
    },
  ];

  searchByFields: (keyof Advertiser)[] = ['name'];

  constructor(private advertisersHandler: AdvertisersHandlerService) {}

  ngOnInit(): void {
    this.advertisersHandler.advertisers$
      .pipe(skip(1), this.detacher.takeUntilDetach())
      .subscribe((adv: Advertiser[]) => (this.advertisers = adv));
  }

  ngOnDestroy(): void {
    this.detacher.detach();
  }
}
