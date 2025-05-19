import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-mobile',
  imports: [CommonModule],
  templateUrl: './review-mobile.component.html',
  styleUrls: ['./review-mobile.component.css'],
})
export class ReviewMobileComponent implements AfterViewInit {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLDivElement>;

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

  activeIndex = 0;

  ngAfterViewInit() {
    this.sliderRef.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    const slider = this.sliderRef.nativeElement;
    const scrollLeft = slider.scrollLeft;
    const width = slider.offsetWidth;
    const index = Math.round(scrollLeft / width);
    this.activeIndex = index;
  }

  scrollTo(index: number): void {
    const slider = this.sliderRef.nativeElement;
    const width = slider.offsetWidth;
    slider.scrollTo({ left: index * width, behavior: 'smooth' });
  }
}