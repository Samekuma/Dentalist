import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  brandlogo: string = '/assets/Icons/brandIcon.svg';
  fbIcon: string = '/assets/Icons/fbIcon.svg';
  twitterIcon: string = '/assets/Icons/x-icon.svg';
  instagramIcon: string = '/assets/Icons/insta-icon.svg';
  // callingIcon: string = '/assets/Icons/callIcon.svg';
  callingIcon: string = '/assets/Icons/Calling.svg';
  clock: string = '/assets/Icons/clock.svg';
  address: string = '/assets/Icons/Locationaddress.svg';
}
