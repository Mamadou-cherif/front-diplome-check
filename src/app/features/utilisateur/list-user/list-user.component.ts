import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-list-user',
    imports: [CommonModule, NgxPaginationModule, MatDialogModule],
  standalone: true,
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent implements OnInit {
  users: any[] = [];
  page = 0;
  size = 10;
  totalPages = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.page, this.size).subscribe({
      next: (res) => {
        this.users = res.data.content || res.data || [];
        this.totalPages = res.data.totalPages || 1;
      },
      error: (err) => {
        // Gérer l'erreur ici (toast, console, etc.)
        console.error('Erreur lors du chargement des utilisateurs', err);
      }
    });
  }

  onPageChange(newPage: number) {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.page = newPage;
      this.loadUsers();
    }
  }
}
