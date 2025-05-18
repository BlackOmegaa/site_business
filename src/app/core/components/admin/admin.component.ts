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

  devis: any[] = [];
  selectedCategory: 'finis' | 'non-finis' = 'non-finis';

  selectedDevis: any = null;
  showModal: boolean = false;




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

    this.adminService.getAllDevis().subscribe({
      next: (data) => {
        this.devis = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des devis :', err);
      },
    });
  }

  get finishedDevis() {
    return this.devis.filter(d => d.isSend);
  }

  get unfinishedDevis() {
    return this.devis.filter(d => !d.isSend);
  }

  get unreadFinished() {
    return this.finishedDevis.filter(d => !d.isRead).length;
  }

  get unreadNonFinished() {
    return this.unfinishedDevis.filter(d => !d.isRead).length;
  }

  selectDevis(devis: any) {
    this.selectedDevis = devis;

    if (!devis.isRead) {
      devis.isRead = true;

    }
  }

  onSelectDevis(devis: any) {

    console.log('Devis sélectionné :', devis);
    this.selectedDevis = devis;
    this.showModal = true;

    if (!devis.isRead) {
      this.adminService.markAsRead(devis.id).subscribe({
        next: () => devis.isRead = true,
        error: () => console.error('Erreur lors du marquage en lu')
      });
    }
  }


  closeDevis() {
    this.selectedDevis = null;
  }


}
