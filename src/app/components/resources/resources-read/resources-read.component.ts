import { ResourceDetailsComponent } from './../resource-details/resource-details.component';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from './../../crud.service';
import { Resources } from './../resources.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-read',
  templateUrl: './resources-read.component.html',
  styleUrls: ['./resources-read.component.css']
})
export class ResourcesReadComponent implements OnInit {

  resources: Resources["data"] | undefined;
  valor: string | undefined;

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.crudService.readResources().subscribe(resources => {
      this.resources = resources["data"];
    })
  }

  openDialogDetails(value:string) {
    const detailsRef = this.dialog.open(ResourceDetailsComponent);
    this.valor = value;
    this.crudService.registerId(this.valor)

    return detailsRef;
  }

}
