import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';

import { SidebarHandlerService } from '../../services';
import { SubscriptionDetacher } from '@core/utils';
import { SidebarContext } from '../../models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit, OnDestroy {
  private detacher = new SubscriptionDetacher();

  isOpen$: Observable<boolean>;
  sidebarContext: SidebarContext;
  @Output() openedChange = new EventEmitter<boolean>();

  @ViewChild('content', { read: ViewContainerRef, static: true }) contentVcRef: ViewContainerRef;

  constructor(private sidebarHandler: SidebarHandlerService) {}

  ngOnInit(): void {
    this.sidebarHandler.vcr = this.contentVcRef;
    this.isOpen$ = this.sidebarHandler.isOpen$;
    this.sidebarHandler.sidebarContext$.subscribe((ctx) => (this.sidebarContext = ctx));
  }

  ngOnDestroy(): void {
    this.detacher.detach();
  }

  confirm(): void {
    this.sidebarHandler.confirm();
  }

  close(): void {
    this.sidebarHandler.close();
  }
}
