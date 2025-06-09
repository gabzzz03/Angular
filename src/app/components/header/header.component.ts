import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  clicked = false
  logo = "Logo.svg";
  get imagePath() {
    return 'assets/' + this.logo
  };
   
  onClick() {
    this.clicked = !this.clicked
  }
}
