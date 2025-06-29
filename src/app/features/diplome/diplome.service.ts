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

  

 verifyDiplomaByNumberAndInstitution(registrationNumber?: string, institutionId?: number): Observable<any> {
  const params: any = {};

  if (registrationNumber) {
    params.registrationNumber = registrationNumber;
  }

  if (institutionId) {
    params.institutionId = institutionId;
    params.size = 10; 
  }

  return this.http.get(`${this.apiUrl}/diplomas/verify`, { params });
}



  // Import batch de diplômes (Excel)
  importDiplomas(file: File, modelId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('modelId', modelId.toString());
    return this.http.post(`${this.apiUrl}/diplomas/import`, formData);
  }

  /**
   * Récupère le certificat PDF d'un diplôme par son ID
   * @param id identifiant du diplôme
   */
  getDiplomaCertificate(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/diplomas/${id}/certificate`, {
      responseType: 'blob',
      headers: { 'Accept': 'application/pdf' }
    });
  }
}
