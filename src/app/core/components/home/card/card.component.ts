import { Component } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';
import { MetricsService } from '../../../services/metrics/metrics.service';

@Component({
  selector: 'app-card',
  imports: [InViewDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private metrics: MetricsService) { }

  onContactClick() {
    this.metrics.sendEvent('contactClicks');
  }
}
