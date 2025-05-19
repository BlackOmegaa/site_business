import { Component, OnInit } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';
import { MetricsService } from '../../../services/metrics/metrics.service';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [InViewDirective, RouterLink, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  constructor(private metrics: MetricsService, private router: Router) { }

  isMobile = false;

  ngOnInit(): void {

    this.isMobile = window.innerWidth <= 768;

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }


  onContactClick() {
    this.metrics.sendEvent('contactClicks');
  }



  goToContact(prestation: string) {
    this.router.navigate(['/contact'], {
      state: { prestation }
    });
  }

}
