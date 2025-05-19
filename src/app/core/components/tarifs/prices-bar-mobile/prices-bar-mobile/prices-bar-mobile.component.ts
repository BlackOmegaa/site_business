import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prices-bar-mobile',
  imports: [CommonModule, RouterLink],
  templateUrl: './prices-bar-mobile.component.html',
  styleUrl: './prices-bar-mobile.component.css'
})
export class PricesBarMobileComponent {
  offres = [
    {
      nom: 'Regular',
      description: 'Idéal pour un site vitrine simple',
      points: [
        '1 à 3 pages',
        'Design responsive',
        'Formulaire de contact'
      ],
      prix: 'à partir de 299€'
    },
    {
      nom: 'Business',
      description: 'Parfait pour les blogs ou petites boutiques',
      points: [
        '4 à 8 pages',
        'Interface administrateur',
        'Articles / Produits dynamiques'
      ],
      prix: 'à partir de 499€'
    },
    {
      nom: 'Premium',
      description: 'Solution sur mesure complète',
      points: [
        'Pages illimitées',
        'Fonctionnalités avancées',
        'Optimisation SEO poussée'
      ],
      prix: 'sur devis'
    }
  ];
}

