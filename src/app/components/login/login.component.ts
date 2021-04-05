import { RegisterComponent } from './../register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CrudService } from '../crud.service';
import { LocalStorageService } from './../../local-storage.service';
import { Users } from './../users/users.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Users = {
    email: '',
    password: '',
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  constructor(
    private crudService: CrudService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Insira um email';
    }

    return this.email.hasError('email') ? 'Esse email não é valido' : '';
  }

  authenticateUser(): void {
    this.crudService.login(this.login).subscribe((data) => {
      this.localStorageService.set('token', data.token);
      this.crudService.showMessage(`Usuário ${this.login.email} logado com sucesso`);
      this.authService.authenticate()
      this.router.navigate(['/users'])
    },
    erro => {
      if (erro.status === 400) {
        this.crudService.showMessage('Email ou senha invalida')
      }
    })
  }

  openDialog() {
    return this.dialog.open(RegisterComponent);
  }

}
