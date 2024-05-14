import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  qualityIcon: string = '/assets/Icons/qualityIcon.svg';
  insuranceIcon: string = '/assets/Icons/insuranceIcon.svg';
  // Fsd stands for full-service dentistry.
  fsdIcon: string = '/assets/Icons/fsdIcon.svg';
  // nje stands for full-service dentistry.
  njeIcon: string = '/assets/Icons/njeIcon.svg';
}
