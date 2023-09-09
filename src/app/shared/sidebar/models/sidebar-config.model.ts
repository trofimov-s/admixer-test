import { Type } from '@angular/core';

export interface SidebarConfig<C, T> {
  component: Type<C>;
  context?: T;
}
