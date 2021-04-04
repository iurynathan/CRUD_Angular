import { CrudService } from '../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-confirm-modal',
  templateUrl: './users-confirm-modal.component.html',
  styleUrls: ['./users-confirm-modal.component.css']
})
export class UsersConfirmModalComponent implements OnInit {

  constructor(
    private crudService: CrudService,
  ) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    const id = this.crudService.value
    this.crudService.delete(id).subscribe(() => {
      this.crudService.showMessage('Usuário excluído com sucesso')
    },
    erro => {
      if (erro.status === 404) {
        this.crudService.showMessage('Usuário não encontrado')
      }
    }
    )
  }

}
