import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { UsersService } from './../users/users.service';
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
    private userService: UsersService,
    private localStorageService: LocalStorageService,
    private router: Router,
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
    this.userService.login(this.login).subscribe((data) => {
      this.localStorageService.set('token', data.token);
      this.userService.showMessage(`Usuário ${this.login.email} logado com sucesso`);
      this.authService.authenticate()
      this.router.navigate(['/users'])
    },
    erro => {
      if (erro.status === 400) {
        this.userService.showMessage('Email ou senha invalida')
      }
    })
  }

}
