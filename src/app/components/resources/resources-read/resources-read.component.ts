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
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.crudService.readResources().subscribe(resources => {
      this.resources = resources["data"];
    })
  }



}
