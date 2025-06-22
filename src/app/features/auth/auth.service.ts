import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginRequest } from './login/login-request.model';
import { RegisterRequest } from './signup/register-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, data);
  }

  register(data: RegisterRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/register`, data);
  }
}
