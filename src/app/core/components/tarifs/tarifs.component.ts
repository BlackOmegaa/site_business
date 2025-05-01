import { Component } from '@angular/core';
import { PricesBarComponent } from './prices-bar/prices-bar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarifs',
  imports: [PricesBarComponent, CommonModule],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.css'
})
export class TarifsComponent {


}
