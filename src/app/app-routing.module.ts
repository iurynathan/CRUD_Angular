import { DelayedUsersComponent } from './views/delayed-users/delayed-users.component';
import { UsersUpdateComponent } from './components/users/users-update/users-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
import { ResourcesComponent } from './views/resources/resources.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { AuthGuard } from './guards/auth-guard'

const routes: Routes = [{
  path: "",
  component: HomeComponent,
},{
  path: "users",
  component: UsersComponent,
  // canActivate: [AuthGuard]
},{
  path: "resources",
  component: ResourcesComponent,
  canActivate: [AuthGuard]
},{
  path: "users/create",
  component: UsersCreateComponent,
  canActivate: [AuthGuard]
},{
  path: "users/update/:id",
  component: UsersUpdateComponent,
  canActivate: [AuthGuard]
},{
  path: "delayedusers",
  component: DelayedUsersComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
