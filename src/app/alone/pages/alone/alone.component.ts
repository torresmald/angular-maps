import { Component, Input } from '@angular/core';
import { CounterComponent } from '../counter/counter/counter.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-alone',
  standalone: true,
  imports: [CounterComponent, SideMenuComponent],
  templateUrl: './alone.component.html',
  styleUrl: './alone.component.css'
})
export class AloneComponent {

  @Input() public counter:number = 10

}
