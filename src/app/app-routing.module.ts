import { UsersUpdateComponent } from './components/users/users-update/users-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
import { ResourcesComponent } from './views/resources/resources.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { ResourcesCreateComponent } from './components/resources/resources-create/resources-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
},{
  path: "users",
  component: UsersComponent,
},{
  path: "resources",
  component: ResourcesComponent,
},{
  path: "users/create",
  component: UsersCreateComponent,
},{
  path: "resources/create",
  component: ResourcesCreateComponent,
},{
  path: "users/update/:id",
  component: UsersUpdateComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
