import { Component } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';


@Component({
  selector: 'app-card',
  imports: [InViewDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
