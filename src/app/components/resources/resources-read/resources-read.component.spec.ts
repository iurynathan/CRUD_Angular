import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesReadComponent } from './resources-read.component';

describe('ResourcesReadComponent', () => {
  let component: ResourcesReadComponent;
  let fixture: ComponentFixture<ResourcesReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
