import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MetricsService {
  private baseUrl = 'http://localhost:3000/metrics';

  constructor(private http: HttpClient) { }

  sendEvent(type: 'todayConnections' | 'contactClicks' | 'contactForms') {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.baseUrl}/increment/${type}`, {}, { headers }).subscribe({
      next: () => console.log(`[✅ METRIC] ${type} envoyé.`),
      error: (err) => console.error(`[❌ METRIC] Échec ${type} :`, err)
    });
  }

  getTodayMetrics() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.baseUrl}/today`, { headers });
  }


  getGlobalMetrics() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/global`, { headers });
  }

}
