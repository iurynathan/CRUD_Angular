import { Router } from '@angular/router';
import { CrudService } from '../../crud.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  user: Users = {
    name: '',
    job: '',
  }

  constructor(
    private crudService: CrudService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  userRegister(): void {
    this.crudService.create(this.user).subscribe((data) => {
      this.crudService.showMessage(`Usuário ${data.name} Cadastrado com Sucesso`);
      this.router.navigate(['/users'])
    })

  }

  cancelUserRegister(): void {
    this.router.navigate(['/users'])
  }
}
