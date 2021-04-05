import { Users } from './../../components/users/users.model';
import { CrudService } from './../../components/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delayed-users',
  templateUrl: './delayed-users.component.html',
  styleUrls: ['./delayed-users.component.css']
})
export class DelayedUsersComponent implements OnInit {

  users!: Users;
  loading = true;

  constructor(
    private crudService: CrudService,
  ) { }

  ngOnInit(): void {
    this.crudService.readUsersDelayed().subscribe((users) => {
      this.users = users;
      this.loading = false;
    })
  }

}
