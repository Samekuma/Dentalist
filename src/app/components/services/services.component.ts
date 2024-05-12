import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  dentureIcon: string = "/assets/Icons/Denture.svg"
  implantIcon: string = "/assets/Icons/implant-icon.svg"
  whiteningIcon: string = "/assets/Icons/whitening.svg"
  rootCanal: string = "/assets/Icons/root.svg"
  caret: string = "/assets/Icons/caret.svg"
}
