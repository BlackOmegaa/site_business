import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-menu',
  imports: [CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent implements OnInit {

  constructor(public auth: AuthService) { }
  user: any;

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.profile-wrapper');
    if (!clickedInside) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.auth.getUserProfile().subscribe({
        next: (user) => {

          this.user = user;
        },
        error: (err) => {
          console.error('Erreur récupération user :', err);
        }
      });
    }
  }
}
