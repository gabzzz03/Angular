import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isLoggedIn = false
  user: User | null = null

  login(user: User) {
    this.isLoggedIn = true
    this.user = user
  }
}
