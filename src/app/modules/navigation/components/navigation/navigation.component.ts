import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationLink } from '@core/models';
import { Icons } from 'src/app/shared/icon/enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  navigationConfig: NavigationLink[] = [
    {
      icon: Icons.HOME,
      text: 'Home',
      path: '',
    },
    {
      icon: Icons.ADS,
      text: 'Advertisers',
      path: 'advertisers',
    },
  ];
}
