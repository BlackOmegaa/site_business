import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../../services/auth/auth.service';
import { HostListener } from '@angular/core';
// @ts-ignore
import confetti from 'canvas-confetti';
import { RouterLink, Router } from '@angular/router';
import { DevisService } from '../../services/devis/devis.service';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('stepAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ]),
    trigger('finalAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
  standalone: true,
})
export class ContactComponent implements OnInit {


  skipPrestationStep = false;



  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    const tag = (event.target as HTMLElement).tagName.toLowerCase();


    if (tag === 'textarea') return;


    if (this.currentStep < this.totalSteps) {
      event.preventDefault();
      this.next();
    }
  }

  constructor(private auth: AuthService, private router: Router, private devisService: DevisService) { }


  currentStep = 1;
  totalSteps = 5;
  invalidFields: string[] = [];
  errorMessages: { [key: string]: string } = {};

  formData: { [key: string]: string } = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    prestation: '',
    message: '',
    preference: '',
    // site vitrine
    pagesVitrine: '',
    designRefVitrine: '',
    fonctionnalitesVitrine: '',
    // boutique
    produitsBoutique: '',
    paiementBoutique: '',
    optionsLivraison: '',
    // blog
    categoriesBlog: '',
    interactionsBlog: '',
    frequenceBlog: ''
  };


  prestations = ['Site vitrine', 'Boutique e-commerce', 'Blog'];
  contactPreferences = ['Par mail', 'Par téléphone'];


  ngOnInit(): void {

    localStorage.removeItem('devisId');

    if (this.auth.isLoggedIn()) {
      this.auth.getUserProfile().subscribe({
        next: (user) => {
          this.formData['prenom'] = user.name.split(' ')[0];
          this.formData['nom'] = user.name.split(' ')[1] || '';
          this.formData['email'] = user.email;
        },
      });
    }

    const state = window.history.state as { prestation?: string };

    if (state?.prestation) {
      this.formData['prestation'] = state.prestation;
      this.skipPrestationStep = true;
    }



    if (this.auth.isLoggedIn()) {
      this.auth.getUserProfile().subscribe({
        next: (user) => {
          this.formData['prenom'] = user.name.split(' ')[0];
          this.formData['nom'] = user.name.split(' ')[1] || '';
          this.formData['email'] = user.email;
        },
      });
    }
  }

  prev() {
    if (this.currentStep > 1) this.currentStep--;
  }

  next() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;

    this.invalidFields = [];
    this.errorMessages = {};

    // Validation par étape
    if (this.currentStep === 1) {
      if (!this.formData['prenom']) this.addError('prenom', 'Veuillez renseigner votre prénom.');
      if (!this.formData['nom']) this.addError('nom', 'Veuillez renseigner votre nom.');
      if (!this.formData['email']) this.addError('email', 'Veuillez renseigner votre email.');
      else if (!emailRegex.test(this.formData['email'])) this.addError('email', 'Email invalide.');
      if (!this.formData['telephone']) this.addError('telephone', 'Veuillez renseigner votre numéro.');
      else if (!phoneRegex.test(this.formData['telephone'])) this.addError('telephone', 'Numéro invalide.');
    }

    if (this.currentStep === 2 && !this.formData['prestation']) {
      this.addError('prestation', 'Veuillez sélectionner un type de projet.');
    }

    if (this.currentStep === 3 && !this.formData['message']) {
      this.addError('message', 'Veuillez décrire votre projet.');
    }

    if (this.currentStep === 4 && !this.formData['preference']) {
      this.addError('preference', 'Veuillez choisir un mode de contact.');
    }

    if (this.invalidFields.length > 0) {
      this.shakeButton();
      return;
    }

    if (this.currentStep !== 3) {
      this.devisService.saveStep(this.formData, this.currentStep, false);
    }
    // Si prestation est skippée, on saute 2 → 3
    if (this.skipPrestationStep && this.currentStep === 1) {
      this.currentStep = 3;
    }
    else if (this.currentStep === 4) {
      this.submitForm();
    } else {
      this.currentStep++;
    }
  }

  onProjectDetailChange() {
    if (this.currentStep === 3) {
      this.devisService.saveStep(this.formData, 3, false);
    }
  }


  submitForm() {
    this.devisService.saveStep(this.formData, 4, true);
    this.currentStep = 5;
    this.launchSimpleConfetti();

  }

  addError(field: string, message: string) {
    this.invalidFields.push(field);
    this.errorMessages[field] = message;
  }

  isInvalid(field: string): boolean {
    return this.invalidFields.includes(field);
  }

  shakeButton() {
    const btn = document.querySelector('.nav-btn.primary');
    if (btn) {
      btn.classList.add('shake');
      setTimeout(() => btn.classList.remove('shake'), 400);
    }
  }

  get progressPercentage(): number {
    return Math.round(((this.currentStep - 1) / (this.totalSteps - 1)) * 100);
  }

  getFormField(field: string): string {
    return this.formData[field];
  }

  setFormField(field: string, value: string): void {
    this.formData[field] = value;
  }




  launchSimpleConfetti() {
    const canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
    const myConfetti = confetti.create(canvas, { resize: true });

    const duration = 1000;
    const end = Date.now() + duration;

    (function frame() {
      myConfetti({
        particleCount: 5,
        angle: 90,
        spread: 120,
        origin: { x: Math.random(), y: 0 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

}
