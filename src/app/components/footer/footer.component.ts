import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  reserve() {
    window.location.href = "https://app.francis-nails.com/public/appointments";
  }
}