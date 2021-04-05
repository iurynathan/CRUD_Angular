import { UserDetailsComponent } from './../user-details/user-details.component';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';
import { CrudService } from '../../crud.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.css']
})
export class UsersReadComponent implements OnInit {

  users!: Users;
  valor!: string;
  disabled: boolean = false;

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.crudService.readUsers('1').subscribe((users) => {
      this.users = users;
    })
  }

  changePage(value:string) {
    this.crudService.readUsers(value).subscribe((users) => {
      this.users = users;
    })
  }

  openDialogDetails(value:string) {
    const detailsRef = this.dialog.open(UserDetailsComponent);
    this.valor = value;
    this.crudService.registerId(this.valor)

    return detailsRef;
  }

}
