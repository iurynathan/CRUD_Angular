import { CrudService } from '../crud.service';
import { Users } from './../users/users.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Users = {
    email: '',
    password: '',
  }

  hide = true;

  constructor(
    private crudService: CrudService,
  ) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.crudService.registerUser(this.register).subscribe(() => {
      this.crudService.showMessage(`Usuário ${this.register.email} cadastrado com sucesso`)
    },
    erro => {
      if (erro.status === 400) {
        this.crudService.showMessage('Erro no cadastro')
      }
    })
  }

}
