import { Users } from './../users.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  user: Users = {
    name: undefined,
    job: undefined,
  }

  constructor(
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readById(id).subscribe(user => {
      this.user = user;
    });
  }

  updateUser(): void {
    this.crudService.update(this.user).subscribe((data) => {
      this.crudService.showMessage(`Usuário ${data.name} editado com sucesso ${data.updatedAt}`)
    })
  }

  cancelUserUpdate(): void {
    this.router.navigate(['/users'])
  }

}
