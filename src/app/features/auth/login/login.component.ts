import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    imports: [RouterLink,FormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  year: number = new Date().getFullYear();

  email = '';
  password = '';
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.loading = true;
    this.error = null;
    this.http.post<any>(`${environment.apiUrl}/auth/login`, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
        this.router.navigate(['/accueil/dashboard']);
      },
      error: (err) => {
        this.error = err?.error?.message || 'Erreur de connexion';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
