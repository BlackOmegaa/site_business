import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlidingBarComponent } from './sliding-bar/sliding-bar.component';
import { InViewDirective } from '../../directives/in-view.directive';
import { ReviewComponent } from './review/review.component';
import { CardComponent } from './card/card.component';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MetricsService } from '../../services/metrics/metrics.service';
import { SlidingBarMobileComponent } from './sliding-bar-mobile/sliding-bar-mobile/sliding-bar-mobile.component';
import { ReviewMobileComponent } from './review-mobile/review-mobile/review-mobile.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SlidingBarComponent, InViewDirective, ReviewComponent, CardComponent, SlidingBarMobileComponent, ReviewMobileComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorMessage = '';
  successMessage = '';

  constructor(private auth: AuthService, private router: Router, private metrics: MetricsService) { }

  ngOnInit(): void {
    const message = history.state?.message;

    if (message) {
      this.successMessage = message;
      history.replaceState({}, '', window.location.pathname);
      setTimeout(() => this.hideToast('success'), 3000);
    }

    this.isMobile = window.innerWidth <= 768;

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }


  hideToast(type: 'success' | 'error') {
    const el = document.getElementById(
      type === 'success' ? 'toast-success' : 'toast-error'
    );

    if (el) {
      el.classList.add('toast-exit');

      setTimeout(() => {
        if (type === 'success') this.successMessage = '';
        if (type === 'error') this.errorMessage = '';
      }, 400);
    }
  }

  onContactClick() {
    this.metrics.sendEvent('contactClicks');
  }

  isMobile = false;

}
