import { ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SidebarConfig<C, T> {
  component: Type<C>;
  context?: T;
}

@Injectable()
export class SidebarHandlerService {
  private _isOpen$ = new BehaviorSubject<boolean>(false);
  private componentRef: ComponentRef<{ context: any }>;

  get isOpen$(): Observable<boolean> {
    return this._isOpen$.asObservable();
  }

  openSidebar(): void {
    this._isOpen$.next(true);
  }

  close(): void {
    this._isOpen$.next(false);
    this.vcr.clear();
  }

  dataListener$ = new BehaviorSubject<SidebarConfig<unknown, unknown>>(null);
  vcr: ViewContainerRef;

  open<C extends { context: T }, T>(component: Type<C>, context?: T): void {
    if (!this.vcr) {
      throw 'Can not find container ref!';
    }

    this.componentRef = this.vcr.createComponent<C>(component);
    this.componentRef.instance.context = context;
    this.openSidebar();
  }

  set viewContainerRef(vcr: ViewContainerRef) {
    this.vcr = vcr;
  }
}
