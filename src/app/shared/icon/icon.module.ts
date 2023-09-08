import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { IconRegistryService } from './service';

function registryIcons(service: IconRegistryService): () => void {
  return () => service.init();
}

@NgModule({
  imports: [CommonModule, MatIconModule],
  providers: [IconRegistryService],
})
export class IconModule {
  static forRoot(): ModuleWithProviders<IconModule> {
    return {
      ngModule: IconModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [IconRegistryService],
          useFactory: registryIcons,
        },
      ],
    };
  }
}
