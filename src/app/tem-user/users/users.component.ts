import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { users } from 'src/data-demo/user.data';
import { RouterLink } from '@angular/router';
import { UsersStore } from './users.store';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToggleComponent } from "../../toggle/toggle.component";
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersStore],
  imports: [MatTableModule, RouterLink, MatGridListModule, ToggleComponent, CommonModule]
})
export class UsersComponent {

  @ViewChild('toggleComp') toggleComponent!: ToggleComponent;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource = users;
  checked = false;
  readonly users$ = this.store.users$;
  
  
  constructor(readonly store: UsersStore) {
    console.log("readonly", this.toggleComponent?.switchValue);
  }

  viewChildTest() {
    this.toggleComponent.changeToggle();
  }

}
