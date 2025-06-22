import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InstitutionService {
  public token: string | null = null;
  
  constructor(private http: HttpClient) {
     this.token = sessionStorage.getItem('token');
  }

  getInstitutions(): Observable<{ success: boolean; data: any[] }> {
    return this.http.get<{ success: boolean; data: any[] }>(
      `${environment.apiUrl}/institutions`
    );
  }

  addInstitution(institution: any): Observable<{ success: boolean; data: any }> {
    return this.http.post<{ success: boolean; data: any }>(`${environment.apiUrl}/institutions`, institution);
  }

  deleteInstitution(id: number): Observable<{ success: boolean; data: any }> {
    return this.http.delete<{ success: boolean; data: any }>(`${environment.apiUrl}/institutions/${id}`);
  }

  updateInstitution(institution: any): Observable<{ success: boolean; data: any }> {
    return this.http.put<{ success: boolean; data: any }>(`${environment.apiUrl}/institutions/${institution.id}`, institution);
  }
}