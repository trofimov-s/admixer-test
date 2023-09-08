import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AdvertisersHandlerService } from '../../services';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisersComponent implements OnInit {
  searchValue: string;

  constructor(private advertisersHandler: AdvertisersHandlerService) {}

  ngOnInit(): void {
    this.advertisersHandler.getAdvertisers();
  }
}
