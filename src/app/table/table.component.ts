import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';

const nzModule = [NzTableModule];
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ...nzModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<RecordType extends Record<string, any>,T> {
  @Input() data : RecordType[] = [];
  @Input() tableColumns: Array<T> = [];

}
