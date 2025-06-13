import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InstitutionService {
  constructor(private http: HttpClient) {}

  getInstitutions(): Observable<{ success: boolean; data: any[] }> {
    return this.http.get<{ success: boolean; data: any[] }>(`${environment.apiUrl}/institutions`);
  }

  addInstitution(institution: any): Observable<{ success: boolean; data: any }> {
    return this.http.post<{ success: boolean; data: any }>(`${environment.apiUrl}/institutions`, institution);
  }

  updateInstitution(institution: any): Observable<{ success: boolean; data: any }> {
    return this.http.put<{ success: boolean; data: any }>(`${environment.apiUrl}/institutions/${institution.id}`, institution);
  }
}