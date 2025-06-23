import { Component, OnInit } from '@angular/core';
import { DiplomeService } from '../diplome.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-diplomes',
  imports: [CommonModule, NgxPaginationModule, MatDialogModule],
  standalone: true,
  templateUrl: './list-diplomes.component.html',
  styleUrl: './list-diplomes.component.scss'
})
export class ListDiplomesComponent implements OnInit {
  diplomes: any[] = [];
  page = 0;
  size = 10;
  totalPages = 1;
  totalElements = 0;

  constructor(private diplomeService: DiplomeService) {}

  ngOnInit(): void {
    this.loadDiplomes();
  }

  loadDiplomes() {
    this.diplomeService.getDiplomas(this.page, this.size).subscribe({
      next: (res) => {
        this.diplomes = res.data.content || [];
        this.totalPages = res.data.totalPages || 1;
        this.totalElements = res.data.totalElements || 0;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des diplômes', err);
      }
    });
  }

  onPageChange(newPage: number) {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.page = newPage;
      this.loadDiplomes();
    }
  }

  getPaginationArray() {
    return Array(this.totalPages).fill(0).map((_, i) => i);
  }
}
