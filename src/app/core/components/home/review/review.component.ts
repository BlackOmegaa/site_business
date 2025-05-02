import { Component, OnDestroy, OnInit } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-review',
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit, OnDestroy {

  currentIndex = 0;
  intervalId: any;


  reviews = [
    {
      text: "Society a su faire preuve de rigueur et de ténacité dans le projet qui leur a été confié. Notre département se sert tous les jours du site qu'ils ont conçu, très apprecié des collègues et supérieurs.",
      author: 'Ministère de la justice',
      image: '/images/profile1.png'
    },
    {
      text: 'Excellent accompagnement dans le cadre de la refonte de mon site vitrine. Je suis particulierement satisfait du support client qui a pu être très réactif à mes différentes requêtes.',
      author: 'MacClain & Smith',
      image: '/images/avocat.png'
    },
    {
      text: "Une équipe sérieuse, disponible et très à l’écoute. Le rendu final dépasse nos attentes, avec un design moderne et une navigation fluide. Nous recommandons sans hésiter.",
      author: 'Bureau Architek',
      image: '/images/architecte.png'
    }
  ];


  nextReview(auto = false) {
    if (this.currentIndex < this.reviews.length - 1) {
      this.currentIndex++;
    } else if (auto) {
      this.currentIndex = 0;
    }
    if (!auto) this.resetInterval();
  }

  prevReview() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.resetInterval();
    }
  }


  resetInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.nextReview(true);
    }, 5000);
  }


  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextReview(true);
    }, 8000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


}
