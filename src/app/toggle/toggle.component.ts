import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  imports: [CommonModule, NzSwitchModule,FormsModule],
})
export class ToggleComponent implements OnInit, OnChanges {
viewChildTest() {
throw new Error('Method not implemented.');
}

  switchValue = false;
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log(this.checked);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes);
  }

  changeToggle() {
    this.checkedChange.emit(!this.checked);
  }
}
