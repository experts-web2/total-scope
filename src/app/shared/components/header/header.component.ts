import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuSelectEvent } from '@progress/kendo-angular-menu';
import { HeaderMenuItems } from 'src/app/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    
  constructor(private router: Router) {}

  public items: HeaderMenuItems[] = [
    {
      text: 'Home',
      path: 'home',
    },
    {
      text: 'About',
      path: 'about',
    },
    {
      text: 'Pricing',
      path: 'pricing',
    },
    {
      text: 'Video',
    },
    {
      text: 'Testmonials',
    },
    {
      text: 'Contact',
    },
  ];

  /**
   * Navigate to page on menu items selection
   * @param event
   */
  onMenuSelection(menuEvent: MenuSelectEvent) {
    const { path } = menuEvent.item;
    if (path) {
      this.router.navigate([path]);
    }
  }
}
