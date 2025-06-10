import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { DUMMY_USER } from '../data/dummy-user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private _isLoggedIn = false;
  user: User | null = null;

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  login() {
    this._isLoggedIn = true;
    this.user = DUMMY_USER;
  }

  logout() {
    this._isLoggedIn = false;
    this.user = null;
  }
}