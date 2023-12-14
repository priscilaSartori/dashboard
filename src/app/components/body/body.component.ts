import { Component } from '@angular/core';
import { AgeComponent } from '../age/age.component';
import { GenderComponent } from '../gender/gender.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AgeComponent, GenderComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
