import { Component, OnInit } from '@angular/core';
import { DevisService } from '../../services/devis/devis.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  devisList: any[] = [];

  constructor(private devisService: DevisService, private auth: AuthService) { }

  ngOnInit(): void {
    this.devisService.getClientDevis().subscribe({
      next: (data) => {
        this.devisList = Array.isArray(data) ? data : [];
      },
      error: (err) => {
        console.error('Erreur de chargement des devis', err);
      }
    });

  }
}
