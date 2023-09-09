import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Advertiser, ControlsOf } from '@core/models';
import { SidebarContent } from '@shared/sidebar';

@Component({
  selector: 'app-edit-advertiser',
  templateUrl: './edit-advertiser.component.html',
  styleUrls: ['edit-advertiser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAdvertiserComponent implements SidebarContent<Advertiser>, OnInit {
  @Input() data: Advertiser;
  @Input() action: (adv: Advertiser) => Promise<void>;
  form: FormGroup;

  ngOnInit(): void {
    const { name, country, advertiserId, campaignCount, impressions, profit } = this.data;

    this.form = new FormGroup<ControlsOf<Advertiser>>({
      name: new FormControl({ value: name, disabled: true }),
      country: new FormControl({ value: country, disabled: true }),
      advertiserId: new FormControl({ value: advertiserId, disabled: true }),
      campaignCount: new FormControl({ value: campaignCount, disabled: true }),
      impressions: new FormControl({ value: impressions, disabled: true }),
      profit: new FormControl({ value: profit, disabled: false }),
    });
  }

  async confirmFn(): Promise<void> {
    const { profit, advertiserId } = this.form.getRawValue() as Advertiser;

    if (!Number(profit)) {
      return;
    }

    const handledProfit: number = +(+profit).toFixed(2);
    const updatedAdvertiser = { profit: handledProfit, advertiserId } as Advertiser;

    await this.action(updatedAdvertiser);
  }
}
