import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service'; // Ajuste le chemin

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent implements OnInit {

  user: any = null;
  isMenuOpen = false;

  constructor(
    public auth: AuthService,
    private userService: UserService,
    public router: Router
  ) { }

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
      this.userService.getUserObservable().subscribe(user => {
        this.user = user;
      });

      const cachedUser = this.userService.getUser();
      if (!cachedUser) {
        this.auth.getUserProfile().subscribe({
          next: (user) => this.userService.setUser(user),
          error: (err) => console.error('Erreur récupération user :', err)
        });
      }
    }
  }


  devisRedirect() {
    this.router.navigate(['/devis']);
  }

  accountRedirect() {
    this.router.navigate(['/account']);
  }
}