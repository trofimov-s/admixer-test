import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Advertiser } from '@core/models';

interface ContextInput<T> {
  context: T;
}

@Component({
  selector: 'app-edit-advertiser',
  templateUrl: './edit-advertiser.component.html',
  styleUrls: ['edit-advertiser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAdvertiserComponent implements ContextInput<Advertiser> {
  @Input() context: Advertiser;
}
