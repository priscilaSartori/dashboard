import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(faYoutube, faInstagram, faTiktok, faTwitter);

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
export class TopWidgetsComponent {
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faTwitter = faTwitter;
}