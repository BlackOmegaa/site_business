import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/auth';
  private tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) { }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { name, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
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

    return this.http.get(`${this.baseUrl}/me`, { headers });
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload?.role || null;
    } catch (e) {
      return null;
    }
  }


}