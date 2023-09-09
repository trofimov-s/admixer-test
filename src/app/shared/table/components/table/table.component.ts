import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { TableCol } from '@shared/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements AfterViewInit {
  private _displayedColumns: TableCol<T>[];
  private _dataSource: MatTableDataSource<T, MatTableDataSourcePaginator>;

  cols: (keyof T)[];

  @Input()
  set search(value: string) {
    this._dataSource.filter = value;
  }

  @Input()
  searchByFields: (keyof T)[];

  @Input()
  sortByFields: (keyof T)[];

  @Input({ required: true })
  set displayedColumns(cols: TableCol<T>[]) {
    this._displayedColumns = cols;
    this.cols = cols.map(({ key }): keyof T => key);
  }

  get displayedColumns(): TableCol<T>[] {
    return this._displayedColumns;
  }

  @Input({ required: true })
  set dataSource(data: T[]) {
    this._dataSource = new MatTableDataSource<T>(data);
  }

  get dataSource(): MatTableDataSource<T, MatTableDataSourcePaginator> {
    return this._dataSource;
  }

  @ViewChild(MatSort) private _sort: MatSort;
  @Output() rowClick = new EventEmitter<T>();

  ngAfterViewInit(): void {
    this.dataSource.sort = this._sort;
    this.dataSource.filterPredicate = (item: T, filter: string): boolean => {
      return this.searchByFields.some((key: keyof T): boolean =>
        item[key].toString().toLowerCase().includes(filter)
      );
    };
  }
}
