import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedUsersComponent } from './delayed-users.component';

describe('DelayedUsersComponent', () => {
  let component: DelayedUsersComponent;
  let fixture: ComponentFixture<DelayedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelayedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
