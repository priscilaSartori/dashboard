import { Component } from '@angular/core';
import { AgeComponent } from '../age/age.component';
import { GenderComponent } from '../gender/gender.component';
import { InterestComponent } from '../interest/interest.component';
import { LocationComponent } from '../location/location.component';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AgeComponent, GenderComponent, InterestComponent, LocationComponent, TopWidgetsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
