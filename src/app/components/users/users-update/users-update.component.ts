import { Users } from './../users.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../users.service';
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
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.readById(id).subscribe(user => {
      this.user = user;
    });
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe((data) => {
      this.userService.showMessage(`Usuário ${data.name} editado com sucesso ${data.updatedAt}`)
    })
  }

  cancelUserUpdate(): void {
    this.router.navigate(['/users'])
  }

}
