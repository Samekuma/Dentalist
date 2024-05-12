import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  heroImage: string = 'assets/Images/Hero-img.svg';
  calling: string = 'assets/Images/Calling.png';
  patterns: string = 'assets/Images/Pattern.png';
  toothIcon: string = 'assets/Icon/tooth-icon.png';
  drSam: string = 'assets/Images/drSam.svg';
  heroTooth: string = 'assets/Images/Hero-tooth.svg';
  quality: string = 'assets/Images/Quality.svg';
}
