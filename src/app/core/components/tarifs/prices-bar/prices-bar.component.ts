import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InViewDirective } from '../../../directives/in-view.directive';
import { ShopComponent } from '../shop/shop.component';
import { VitrineComponent } from '../vitrine/vitrine.component';
import { BlogComponent } from '../blog/blog.component';
import { OtherComponent } from '../other/other.component';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-prices-bar',
  imports: [CommonModule, FormsModule, InViewDirective, ShopComponent, VitrineComponent, BlogComponent, OtherComponent],
  templateUrl: './prices-bar.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
  styleUrl: './prices-bar.component.css'
})
export class PricesBarComponent {


  selectedOption: string = 'radio1';


}

