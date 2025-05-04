import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth/auth.service';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MetricsService } from '../../services/metrics/metrics.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, UserMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(public auth: AuthService, public metrics: MetricsService) { }


  get isAdmin(): boolean {
    return this.auth.getUserRole() === 'ADMIN';
  }

  onContactClick() {
    this.metrics.sendEvent('contactClicks');
  }
}

