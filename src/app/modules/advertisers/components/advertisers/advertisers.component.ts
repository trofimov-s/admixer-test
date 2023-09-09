import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { firstValueFrom, skip } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { AdvertisersHandlerService } from '../../services';
import { Advertiser } from '@core/models';
import { SubscriptionDetacher } from '@core/utils';
import { TableCol } from '@shared/table';
import { SidebarHandlerService } from '@shared/sidebar';
import { EditAdvertiserComponent } from '../edit-advertiser/edit-advertiser.component';
import { InformDialogComponent } from '@shared/modal';

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

  constructor(
    private advertisersHandler: AdvertisersHandlerService,
    private sidebarHandler: SidebarHandlerService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.advertisersHandler.advertisers$
      .pipe(skip(1), this.detacher.takeUntilDetach())
      .subscribe((adv: Advertiser[]) => {
        this.advertisers = [...adv];
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.detacher.detach();
  }

  rowClickHanlder(adv: Advertiser): void {
    this.sidebarHandler.open(
      EditAdvertiserComponent,
      { data: adv, action: this.updateAdvertiser.bind(this) },
      {
        title: `Edit Advertiser: ${adv.name}`,
      }
    );
  }

  async updateAdvertiser(adv: Advertiser): Promise<void> {
    try {
      await firstValueFrom(this.advertisersHandler.updateAdvertiser(adv));
      this.sidebarHandler.close();
      this.dialog.open(InformDialogComponent, {
        data: {
          text: 'Success! You updated the Advertiser info',
        },
      });
    } catch {
      this.sidebarHandler.close();
      this.dialog.open(InformDialogComponent, {
        data: {
          text: 'Sorry! Can not update Advertiser info',
        },
      });
    }
  }
}
