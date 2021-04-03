import { Router } from '@angular/router';
import { UsersService } from './../users.service';
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
    private userService: UsersService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  userRegister(): void {
    this.userService.create(this.user).subscribe((data) => {
      this.userService.showMessage(`Usuário ${data.name} Cadastrado com Sucesso`);
      this.router.navigate(['/users'])
    })

  }

  cancelUserRegister(): void {
    this.router.navigate(['/users'])
  }
}
