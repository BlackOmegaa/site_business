import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-propos',
  imports: [RouterLink, InViewDirective],
  templateUrl: './propos.component.html',
  styleUrl: './propos.component.css'
})
export class ProposComponent {

}
