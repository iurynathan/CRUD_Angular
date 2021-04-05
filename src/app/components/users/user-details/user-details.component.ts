import { MatDialog } from '@angular/material/dialog';
import { UsersConfirmModalComponent } from './../users-confirm-modal/users-confirm-modal.component';
import { Users } from './../users.model';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id!: string;
  email!: string;
  first_name!: string;
  last_name!: string;
  avatar!: string;
  valor!: string;

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const id = this.crudService.value
    this.crudService.readById(id).subscribe((user: any) => {
      this.email = user.data.email;
      this.first_name = user.data.first_name;
      this.last_name = user.data.last_name;
      this.avatar = user.data.avatar;
      this.id = user.data.id;
    })
  }

  openDialog(value:string) {
    const dialogRef = this.dialog.open(UsersConfirmModalComponent);
    this.valor = value;
    this.crudService.registerId(this.valor);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
