import { ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { SidebarConfig, SidebarContent, SidebarContext } from '../models';

@Injectable()
export class SidebarHandlerService {
  private _isOpen$ = new BehaviorSubject<boolean>(false);
  private componentRef: ComponentRef<SidebarContent<any>>;

  get isOpen$(): Observable<boolean> {
    return this._isOpen$.asObservable();
  }

  openSidebar(): void {
    this._isOpen$.next(true);
  }

  close(): void {
    this._isOpen$.next(false);
    this.componentRef?.destroy();
    this.vcr?.clear();
  }

  private _sidebarContext$ = new BehaviorSubject<SidebarContext>(null);
  get sidebarContext$(): Observable<SidebarContext> {
    return this._sidebarContext$;
  }

  dataListener$ = new BehaviorSubject<SidebarConfig<unknown, unknown>>(null);
  vcr: ViewContainerRef;

  open<C extends SidebarContent<T>, T>(
    component: Type<C>,
    context: { data: T; action: (...args: any[]) => void },
    sidebarContext: SidebarContext
  ): void {
    if (!this.vcr) {
      throw 'Can not find container ref!';
    }

    this._sidebarContext$.next(sidebarContext);

    const { data, action } = context;
    this.componentRef = this.vcr.createComponent<C>(component);
    this.componentRef.instance.data = data;
    this.componentRef.instance.action = action;
    this.openSidebar();
  }

  confirm(): void {
    this.componentRef.instance.confirmFn();
  }

  set viewContainerRef(vcr: ViewContainerRef) {
    this.vcr = vcr;
  }
}
