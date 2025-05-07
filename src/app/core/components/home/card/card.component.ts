import { Component } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';
import { MetricsService } from '../../../services/metrics/metrics.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [InViewDirective, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private metrics: MetricsService, private router: Router) { }

  onContactClick() {
    this.metrics.sendEvent('contactClicks');
  }



  goToContact(prestation: string) {
    this.router.navigate(['/contact'], {
      state: { prestation }
    });
  }

}
