import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
import { ResourcesComponent } from './views/resources/resources.component';
import { UsersReadComponent } from './components/users/users-read/users-read.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { UsersUpdateComponent } from './components/users/users-update/users-update.component';
import { UsersConfirmModalComponent } from './components/users/users-confirm-modal/users-confirm-modal.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth-guard';
import { RegisterComponent } from './components/register/register.component';
import { ResourcesReadComponent } from './components/resources/resources-read/resources-read.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { ResourceDetailsComponent } from './components/resources/resource-details/resource-details.component';
import { DelayedUsersComponent } from './views/delayed-users/delayed-users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UsersComponent,
    ResourcesComponent,
    UsersCreateComponent,
    UsersReadComponent,
    UsersUpdateComponent,
    UsersConfirmModalComponent,
    LoginComponent,
    RegisterComponent,
    ResourcesReadComponent,
    UserDetailsComponent,
    ResourceDetailsComponent,
    DelayedUsersComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatDialogModule,
  ],
  entryComponents: [UsersConfirmModalComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
