import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationLink } from '@core/models';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLinkComponent {
  @Input({ required: true })
  linkConfig: NavigationLink;
}
