import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserAuthService } from '../../services/user-auth.service';
import { DUMMY_USER } from '../../data/dummy-user';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  constructor(public UserAuthService : UserAuthService){

  }

}
