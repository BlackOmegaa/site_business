import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteBlogComponent } from './site-blog/site-blog.component';
import { SiteBoutiqueComponent } from './site-boutique/site-boutique.component';
import { SiteVitrineComponent } from './site-vitrine/site-vitrine.component';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [RouterLink, CommonModule, SiteBlogComponent, SiteBoutiqueComponent, SiteVitrineComponent],
  styleUrls: ['./contact.component.css'],
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
})



export class ContactComponent {

  selectedForm: 'vitrine' | 'boutique' | 'blog' | null = null;
  currentForm: 'vitrine' | 'boutique' | 'blog' | null = null;
  isMenuDisappearing = false;


  selectForm(formType: 'vitrine' | 'boutique' | 'blog') {
    this.selectedForm = formType;
    this.isMenuDisappearing = true;
  }

  onMenuFadeOut(event: any) {
    if (this.isMenuDisappearing && event.toState === 'void') {
      this.currentForm = this.selectedForm;
      console.log(this.currentForm);
    }

  }
}