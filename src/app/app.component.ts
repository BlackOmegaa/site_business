
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MetricsService } from './core/services/metrics/metrics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-business';

  showNavbar = true;

  constructor(private router: Router, private metrics: MetricsService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const hiddenRoutes = ['/login', '/register', '/contact'];
        this.showNavbar = !hiddenRoutes.includes(event.urlAfterRedirects);
      });
  }


  ngOnInit(): void {
    const key = 'visit_' + new Date().toISOString().slice(0, 10);

    if (!localStorage.getItem(key)) {
      this.metrics.sendEvent('todayConnections');
      localStorage.setItem(key, '1');
    }
  }

}


