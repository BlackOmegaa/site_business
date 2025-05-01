import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlidingBarComponent } from './sliding-bar/sliding-bar.component';
import { InViewDirective } from '../../directives/in-view.directive';
import { DivScrollerComponent } from './div-scroller/div-scroller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SlidingBarComponent, InViewDirective, DivScrollerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
