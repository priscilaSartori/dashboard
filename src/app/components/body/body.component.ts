import { Component } from '@angular/core';
import { AgeComponent } from '../age/age.component';
import { GenderComponent } from '../gender/gender.component';
import { InterestComponent } from '../interest/interest.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AgeComponent, GenderComponent, InterestComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
