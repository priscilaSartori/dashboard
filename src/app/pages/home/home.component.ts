import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, SidenavComponent]
})
export class HomeComponent {

}
