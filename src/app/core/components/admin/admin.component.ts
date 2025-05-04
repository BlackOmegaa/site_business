import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { MetricsService } from '../../services/metrics/metrics.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule]
})
export class AdminComponent implements OnInit {
  metrics: any = null;
  users: any[] = [];
  globalMetrics: any = null;

  constructor(
    private adminService: AdminService,
    private metricsService: MetricsService
  ) { }

  ngOnInit(): void {
    this.adminService.getMetrics().subscribe({
      next: (data) => {
        this.users = data.recentUsers;
      },
      error: (err) => {
        console.error('Erreur admin :', err);
      },
    });

    this.metricsService.getTodayMetrics().subscribe({
      next: (data) => {
        this.metrics = data;
      },
      error: (err) => {
        console.error('Erreur métriques du jour :', err);
      },
    });

    this.metricsService.getGlobalMetrics().subscribe({
      next: (data) => {
        this.globalMetrics = data;
      },
      error: (err) => {
        console.error('Erreur global metrics :', err);
      },
    });

  }


}
