import { UsersConfirmModalComponent } from './../users-confirm-modal/users-confirm-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.css']
})
export class UsersReadComponent implements OnInit {

  users: Users["data"] | undefined;
  valor: string | undefined

  constructor(
    private userService: UsersService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.userService.readUsers().subscribe((users) => {
      this.users = users["data"];
    })
  }

  openDialog(value:string) {
    const dialogRef = this.dialog.open(UsersConfirmModalComponent);
    this.valor = value;
    this.userService.registerId(this.valor)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
