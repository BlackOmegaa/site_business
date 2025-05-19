import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sliding-bar-mobile',
  imports: [CommonModule],
  templateUrl: './sliding-bar-mobile.component.html',
  styleUrls: ['./sliding-bar-mobile.component.css'],
  standalone: true,
})
export class SlidingBarMobileComponent {
  items = [
    {
      icon: '/images/14.png',
      title: 'Design élégant',
      text: 'Une esthétique qui inspire confiance à vos visiteurs.'
    },
    {
      icon: '/images/16.png',
      title: 'Support réactif',
      text: 'Nous répondons rapidement à toutes vos demandes.'
    },
    {
      icon: '/images/17.png',
      title: 'Optimisé SEO',
      text: 'Un code propre et optimisé pour un meilleur référencement.'
    },
    {
      icon: '/images/15.png',
      title: 'Responsive et fluide',
      text: 'Un code propre et optimisé pour tout les supports.'
    }
  ];

  currentIndex = 0;

  scrollRight() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}