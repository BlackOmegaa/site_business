import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InViewDirective } from '../../../directives/in-view.directive';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-div-scroller',
  imports: [CommonModule, FormsModule, InViewDirective],
  templateUrl: './div-scroller.component.html',
  styleUrls: ['./div-scroller.component.css']
})
export class DivScrollerComponent {




}
