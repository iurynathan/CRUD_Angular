import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticateUser: boolean = false

  showMenuEmitter = new EventEmitter<boolean>() ;

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  authenticate(): void {
    if (this.localStorageService.get('token')) {
      this.authenticateUser = true;
      this.showMenuEmitter.emit(true);
    } else {
      this.authenticateUser = false;
      this.showMenuEmitter.emit(false);
    }
  }

  authenticateUserGuard() {
    return this.authenticateUser;
  }
}
