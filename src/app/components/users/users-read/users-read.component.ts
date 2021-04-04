import { UsersConfirmModalComponent } from './../users-confirm-modal/users-confirm-modal.component';
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
  page = 1

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.crudService.readUsers('1').subscribe((users) => {
      this.users = users;
    })
  }

  openDialog(value:string) {
    const dialogRef = this.dialog.open(UsersConfirmModalComponent);
    this.valor = value;
    this.crudService.registerId(this.valor)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
