import { ActivatedRoute } from '@angular/router';
import { Users } from './../users.model';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-confirm-modal',
  templateUrl: './users-confirm-modal.component.html',
  styleUrls: ['./users-confirm-modal.component.css']
})
export class UsersConfirmModalComponent implements OnInit {

  users: Users["data"] | undefined;

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    const id = this.userService.value
    console.log(id)
    this.userService.delete(id).subscribe(() => {
      this.userService.showMessage('Usuário excluído com sucesso')
    },
    erro => {
      if(erro.status === 404) {
        console.log('Usuário não encontrado')
      }
    }
    )
  }

}
