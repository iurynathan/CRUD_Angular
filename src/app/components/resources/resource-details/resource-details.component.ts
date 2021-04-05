import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  id!: number;
  name!: string;
  year!: number;
  color!: string;
  pantone_value!: string;

  constructor(
    private crudService: CrudService,
  ) { }

  ngOnInit(): void {
    const id = this.crudService.value
    this.crudService.readResourcesById(id).subscribe((resource: any) => {
      console.log(resource)
      this.id = resource.data.id;
      this.name = resource.data.name;
      this.year = resource.data.year;
      this.color = resource.data.color;
      this.pantone_value = resource.data.pantone_value;
    })
  }

}
