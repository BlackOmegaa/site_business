import { Component } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';

@Component({
  selector: 'app-review',
  imports: [InViewDirective],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

}
