import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://site-business-backend-production.up.railway.app/auth';
  private tokenKey = 'token';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) { }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { name, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem(this.tokenKey, res.token);
          this.getUserProfile().subscribe(); // Mise à jour immédiate du profil
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.userService.setUser(null);
    if (this.router.url === '/home') {
      history.replaceState({ message: 'Vous avez été déconnecté.' }, '');
      window.location.reload();
    } else {
      this.router.navigate(['/home'], {
        state: { message: 'Vous avez été déconnecté.' }
      });
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  getUserProfile(): Observable<any> {
    const token = this.getToken();
    if (!token) throw new Error('No token found');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return new Observable((observer) => {
      this.http.get(`${this.baseUrl}/me`, { headers }).subscribe({
        next: (data) => {
          this.userService.setUser(data); // Stocke les infos dans le service centralisé
          observer.next(data);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload?.role || null;
    } catch {
      return null;
    }
  }



  updateProfile(updatedData: any): Observable<any> {
    const token = this.getToken();
    if (!token) throw new Error('No token found');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return new Observable((observer) => {
      this.http.put(`${this.baseUrl}/update-profile`, updatedData, { headers }).subscribe({
        next: (res: any) => {
          localStorage.setItem(this.tokenKey, res.token);
          this.userService.setUser(res.user);
          observer.next(res);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  updatePassword(oldPassword: string, newPassword: string): Observable<any> {
    const token = this.getToken();
    if (!token) throw new Error('No token found');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.baseUrl}/update-password`, { oldPassword, newPassword }, { headers });
  }

  getCurrentUserValue() {
    return this.userService.getUser();
  }

  getUserSnapshot() {
    return this.userService['userSubject'].value;
  }

}