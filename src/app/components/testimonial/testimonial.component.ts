import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  robert: string = '/assets/Images/robert.svg';
  albert: string = '/assets/Images/Albert.svg';
  bessie: string = '/assets/Images/bessie.svg';
  ratings: string = '/assets/Icons/ratings.svg'
}
