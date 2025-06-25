import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Créer un diplôme
  createDiploma(diploma: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/diplomas`, diploma);
  }

  // Liste des diplômes (pagination)
  getDiplomas(page: number, size: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/diplomas?page=${page}&size=${size}`);
  }

  // Liste des diplômes (pagination + filtres dynamiques)
  getDiplomasWithParams(params: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/diplomas`, { params });
  }

  // Récupérer un diplôme par ID
  getDiplomaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/diplomas/${id}`);
  }

  // Vérifier un diplôme
  verifyDiploma(registrationNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/diplomas/verify`, { registrationNumber });
  }

  // Import batch de diplômes (Excel)
  importDiplomas(file: File, modelId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('modelId', modelId.toString());
    return this.http.post(`${this.apiUrl}/diplomas/import`, formData);
  }
}
