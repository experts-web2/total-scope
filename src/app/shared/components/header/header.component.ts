import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private router: Router) { }

  public items: any[] = [
    {
        text: 'Home',
        path:'home',
    },
    {
        text: 'About',
        path:'about',
        
    },
    {
        text: 'Pricing',
        path:'pricing',
        
    },
    {
        text: 'Video',
        
    },
    {
        text: 'Testmonials',
        
    },
    {
        text: 'Contact',
        
    }
];

onSelect(event:any){    
    this.router.navigate([event.item.path])
    
}
}
