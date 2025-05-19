import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sliding-bar-mobile',
  imports: [CommonModule],
  templateUrl: './sliding-bar-mobile.component.html',
  styleUrls: ['./sliding-bar-mobile.component.css'],
  standalone: true
})
export class SlidingBarMobileComponent {
  selectedIndex = 0;

  contents = [
    {
      title: 'Sites web ultra modernes',
      description: 'Un design percutant, adapté à votre image, et optimisé pour convertir.'
    },
    {
      title: '100% Responsive',
      description: 'Votre site sera parfait sur mobile, tablette et desktop.'
    },
    {
      title: 'Chargement ultra-rapide',
      description: 'Optimisé pour la performance et un SEO au top.'
    },
    {
      title: 'Panneau d’administration',
      description: 'Gérez votre site facilement sans compétence technique.'
    },
    {
      title: 'Support réactif',
      description: 'Je suis disponible pour vous aider et faire évoluer votre projet.'
    }
  ];

  goTo(index: number) {
    this.selectedIndex = index;
  }

  prev() {
    if (this.selectedIndex > 0) this.selectedIndex--;
  }

  next() {
    if (this.selectedIndex < this.contents.length - 1) this.selectedIndex++;
  }
}