import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inform-dialog',
  templateUrl: './inform-dialog.component.html',
  styleUrls: ['./inform-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { text: string },
    private dialog: MatDialog
  ) {}

  close(): void {
    this.dialog.closeAll();
  }
}
