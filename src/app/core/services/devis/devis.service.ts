// src/app/services/devis.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DevisService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'https://site-business-backend-production.up.railway.app/api/devis';

  saveStep(formData: any, step: number, isSend: boolean = false) {
    const id = localStorage.getItem('devisId');

    const payload = {
      ...formData,
      step,
      isSend,
      id: id || undefined // On ne l'envoie que s'il existe
    };

    return this.http.post<{ id?: string }>(`${this.baseUrl}/save-step`, payload).subscribe({
      next: (res) => {
        if (res.id) {
          localStorage.setItem('devisId', res.id);
          console.log(`🆕 Nouveau devis créé avec l'id ${res.id}`);
        } else {
          console.log(`✅ Étape ${step} sauvegardée`);
        }
      },
      error: () => console.warn(`❌ Erreur lors de la sauvegarde de l'étape ${step}`)
    });
  }

  clearDevisId() {
    localStorage.removeItem('devisId');
  }

  getMyDevis() {
    return this.http.get<any[]>(`${this.baseUrl}/my-devis`);
  }

  getClientDevis() {
    return this.http.get<any[]>('http://localhost:3000/api/devis/by-client');
  }


}
