import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface menuItem {
  route: string,
  name: string
}
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})

export class SideMenuComponent {

  public menuItems: menuItem[] =[
    {route: '/maps/fullscreen', name: 'Fullscreen'},
    {route: '/maps/zoom', name: 'Zoom'},
    {route: '/maps/markers', name: 'Markers'},
    {route: '/maps/properties', name: 'Properties'},
    {route: '/alone', name: 'Alone Page'},
  ]

}
