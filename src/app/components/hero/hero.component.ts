import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() navbarHeight = 0;

  reserve() {
    window.location.href = "https://app.francis-nails.com/public/appointments";
  }
}