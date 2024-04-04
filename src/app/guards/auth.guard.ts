import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(public auth: AuthenticationService) {}

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }

  canLoad(): boolean {
    return this.auth.isAuthenticated();
  }
}
