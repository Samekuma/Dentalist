import { Component } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.scss'],
})
export class AboutHeroComponent {
  dentalPatient: string = '/assets/Images/dentalPatient.svg';
  dentistDoc: string = '/assets/Images/dentistDoc.svg';
  pattern: string = '/assets/Icons/Pattern.svg';
}
