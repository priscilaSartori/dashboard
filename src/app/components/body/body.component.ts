import { Component } from '@angular/core';
import { AgeComponent } from '../age/age.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AgeComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
