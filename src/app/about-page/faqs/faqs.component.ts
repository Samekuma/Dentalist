import { Component } from '@angular/core';
import { FAQ } from './faq';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent {
  caret: string = '/assets/Images/expand-arrow.png';

  faqs: FAQ[] = [
    {
      question: 'Is there any cost or obligation if l request an offer?',
      answer:
        'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. ',
      open: false,
    },

    {
      question: 'What kind of construction services will be purchased?',
      answer:
        'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. ',
      open: false,
    },

    {
      question: 'How Do I Print My Auto Insurance ID Card?',
      answer:
        'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. ',
      open: false,
    },

    {
      question: 'How Do I Know What Deductible Applies To My Policy?',
      answer:
        'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. ',
      open: false,
    },

    {
      question: 'If I Am Moving, Will I Need To Request A New Agent??',
      answer:
        'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. ',
      open: false,
    },
  ];

  // toggleFAQ(faq: FAQ) {
  //   faq.open = !faq.open;
  // }

  toggleFAQ(faq: FAQ) {
    this.faqs.forEach((f) => {
      if (f !== faq) {
        f.open = false;
      }
    });
 
    faq.open = !faq.open;
  }
}
