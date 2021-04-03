import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersConfirmModalComponent } from './users-confirm-modal.component';

describe('UsersConfirmModalComponent', () => {
  let component: UsersConfirmModalComponent;
  let fixture: ComponentFixture<UsersConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
