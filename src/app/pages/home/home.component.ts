import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { BodyComponent } from '../../components/body/body.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, SidenavComponent, BodyComponent]
})
export class HomeComponent {

}
