import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router'
import { AuthService } from './../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate() : Observable<boolean> | boolean{
    if (this.authService.authenticateUserGuard()) {
      return true;
    }
    this.router.navigate(['/'])
    return false;
  }
}
