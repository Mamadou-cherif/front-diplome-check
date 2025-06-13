import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterRequest } from './register-request.model';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  year: number = new Date().getFullYear();

  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.loading = true;
    this.error = null;
    this.success = null;
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      this.error = 'Tous les champs sont obligatoires.';
      this.loading = false;
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas.';
      this.loading = false;
      return;
    }
    const data: RegisterRequest = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      institutionId: 0, 
      roles: ['ROLE_PUBLIC']
    };
    this.authService.register(data).subscribe({
      next: (res) => {
        this.success = 'Inscription réussie ! Vous pouvez vous connecter.';
         this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error = err?.error?.message || 'Erreur lors de l’inscription';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}