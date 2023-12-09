import { Component, NgModule } from '@angular/core';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTwitter, faInstagram, faYoutube, faTwitter, faDashboard);

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  faDashboard = faDashboard;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faTwitter = faTwitter;
}
