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
}