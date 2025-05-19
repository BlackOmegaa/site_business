import { Component, OnInit } from '@angular/core';
import { PricesBarComponent } from './prices-bar/prices-bar.component';
import { CommonModule } from '@angular/common';
import { PricesBarMobileComponent } from './prices-bar-mobile/prices-bar-mobile/prices-bar-mobile.component';
import { VitrineComponent } from "./vitrine/vitrine.component";


@Component({
  selector: 'app-tarifs',
  imports: [CommonModule, PricesBarMobileComponent, VitrineComponent],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.css'
})
export class TarifsComponent implements OnInit {
  isMobile = false;

  ngOnInit(): void {


    this.isMobile = window.innerWidth <= 768;

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }
}
