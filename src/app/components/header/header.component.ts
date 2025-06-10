import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { RouterLink } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: User | null = null;
  logo = "Logo.svg";

  constructor(public userAuthService: UserAuthService) {}

  get imagePath() {
    return 'assets/' + this.logo;
  }

  onClick() {
    this.userAuthService.isLoggedIn()
      ? this.userAuthService.logout()
      : this.userAuthService.login();
      
    this.user = this.userAuthService.user;
  }
}