import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelDiplomeService {
  constructor(private http: HttpClient) {}

  getDiplomaModels(page: number, size: number): Observable<any> {
    const url = `${environment.apiUrl}/diploma-models?page=${page}&size=${size}`;
    return this.http.get<any>(url);
  }

  addDiplomaModel(model: any) {
    return this.http.post<any>(`${environment.apiUrl}/diploma-models`, model);
  }

  getDiplomaModelById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/diploma-models/${id}`);
  }

  updateDiplomaModel(id: number, model: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/diploma-models/${id}`, model);
  }

  deleteDiplomaModel(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/diploma-models/${id}`);
  }

  getFieldsByModelId(modelId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/diploma-models/${modelId}/fields`);
  }

  getModelsByInstitutionId(institutionId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/diploma-models/institution/${institutionId}`);
  }
}