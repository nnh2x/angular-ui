import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './tem-user/users/users.component';
import { UserDetailComponent } from './tem-user/user-detail/user-detail.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: 'users/user/:id',
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
