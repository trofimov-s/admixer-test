import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SidebarHandlerService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  isOpen$: Observable<boolean>;
  @Output() openedChange = new EventEmitter<boolean>();

  @ViewChild('content', { read: ViewContainerRef, static: true }) contentVcRef: ViewContainerRef;

  constructor(private sidebarHandler: SidebarHandlerService) {}

  ngOnInit(): void {
    this.sidebarHandler.vcr = this.contentVcRef;
    this.isOpen$ = this.sidebarHandler.isOpen$;
  }

  close(): void {
    this.sidebarHandler.close();
  }
}
