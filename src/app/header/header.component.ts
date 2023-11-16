import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showNavbar: boolean = false;

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  activeLink: string = 'home';

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
