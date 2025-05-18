import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any = {};
  showPasswordModal = false;

  feedbackMessage: string | null = null;
  feedbackType: 'success-message' | 'error-message' = 'success-message';

  passwordData = { old: '', new: '', confirm: '' };
  passwordMessage: string | null = null;
  passwordMessageType: 'success-message' | 'error-message' = 'success-message';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) return;
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.authService.getUserProfile().subscribe({
      next: (data) => {
        this.user = { ...data }; // clone pour rafraîchir la référence
      },
      error: () => this.setFeedback('Impossible de charger vos informations.', 'error-message')
    });
  }

  saveChanges() {
    if (!this.user.name?.trim() || !this.user.email?.trim()) {
      this.setFeedback('Veuillez remplir tous les champs.', 'error-message');
      return;
    }

    this.authService.updateProfile({ name: this.user.name, email: this.user.email }).subscribe({
      next: () => {
        this.setFeedback('Profil mis à jour avec succès.', 'success-message');
        // Recharge avec une nouvelle instance pour que Angular détecte le changement
        this.loadUserProfile();
      },
      error: () => this.setFeedback('Erreur lors de la mise à jour.', 'error-message')
    });
  }

  updatePassword() {
    const { old, new: newPassword, confirm } = this.passwordData;

    if (!old || !newPassword || !confirm) {
      return this.setPasswordFeedback('Veuillez remplir tous les champs.', 'error-message');
    }

    if (newPassword !== confirm) {
      return this.setPasswordFeedback('Les mots de passe ne correspondent pas.', 'error-message');
    }

    this.authService.updatePassword(old, newPassword).subscribe({
      next: () => {
        this.setPasswordFeedback('Mot de passe mis à jour !', 'success-message');
        this.passwordData = { old: '', new: '', confirm: '' };
      },
      error: () => this.setPasswordFeedback('Erreur de mise à jour.', 'error-message')
    });
  }

  closeModal() {
    this.showPasswordModal = false;
    this.passwordData = { old: '', new: '', confirm: '' };
    this.passwordMessage = null;
  }

  setFeedback(message: string, type: 'success-message' | 'error-message') {
    this.feedbackMessage = message;
    this.feedbackType = type;
    setTimeout(() => (this.feedbackMessage = null), 3000);
  }

  setPasswordFeedback(message: string, type: 'success-message' | 'error-message') {
    this.passwordMessage = message;
    this.passwordMessageType = type;
    setTimeout(() => (this.passwordMessage = null), 3000);
  }
}