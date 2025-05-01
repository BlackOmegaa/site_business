import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InViewDirective } from '../../../directives/in-view.directive';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-sliding-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, InViewDirective, RouterLink],
  templateUrl: './sliding-bar.component.html',
  styleUrls: ['./sliding-bar.component.css']
})
export class SlidingBarComponent implements OnInit, OnDestroy {
  selectedOption: string = 'radio1';


  private slideInterval: any;
  private resumeTimeout: any;
  private radios = ['radio1', 'radio2', 'radio3', 'radio4', 'radio5'];

  getGliderStyle() {
    const positions = {
      radio1: 0,
      radio2: 1,
      radio3: 2,
      radio4: 3,
      radio5: 4
    };
    const index = parseInt(this.selectedOption.replace("radio", "")) + 1;
    return {
      transform: `translateX(${index * 100}vw)`
    };
  }


  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.clearAllTimers();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.slideToNext();
    }, 5000);
    console.log('Auto-slide started');
  }

  stopAutoSlideTemporarily() {
    this.clearAllTimers();
    console.log('Auto-slide paused (user action)');

    // Reprendre après 30 secondes d'inactivité
    this.resumeTimeout = setTimeout(() => {
      console.log('Auto-slide resumed after 30s');
      this.startAutoSlide();
    }, 30000);
  }

  clearAllTimers() {
    clearInterval(this.slideInterval);
    clearTimeout(this.resumeTimeout);
  }

  slideToNext() {
    const currentIndex = this.radios.indexOf(this.selectedOption);
    const nextIndex = (currentIndex + 1) % this.radios.length;
    this.selectedOption = this.radios[nextIndex];
  }

  onUserClick() {
    this.stopAutoSlideTemporarily();
  }
}

