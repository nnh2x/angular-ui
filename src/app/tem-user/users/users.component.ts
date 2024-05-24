import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { users } from 'src/data-demo/user.data';
import { RouterLink } from '@angular/router';
import { UsersStore } from './users.store';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTableModule, RouterLink,MatGridListModule],
  providers:[UsersStore]
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource = users;

  constructor( readonly store: UsersStore) {}

  readonly users$ = this.store.users$;
}
