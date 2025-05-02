import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InViewDirective } from '../../../directives/in-view.directive';


@Component({
  selector: 'app-card',
  imports: [RouterLink, InViewDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
