import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialog } from '@angular/material/dialog';

import { InstitutionService } from '../institution.service';
import { InstitutionModalComponent } from '../institution-modal/institution-modal.component';

@Component({
  selector: 'app-list-institution',
  imports: [CommonModule, NgxPaginationModule],
  standalone: true,
  templateUrl: './list-institution.component.html',
  styleUrls: ['./list-institution.component.scss']
})
export class ListInstitutionComponent implements OnInit {
  institutions: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private institutionService: InstitutionService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadInstitutions();
  }

  loadInstitutions(): void {
    this.institutionService.getInstitutions().subscribe({
      next: (response: { success: boolean; data: any[] }) => {
        if (response.success) {
          this.institutions = response.data;
        }
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des institutions', err);
      }
    });
  }

  openAddModal(): void {
    const dialogRef = this.dialog.open(InstitutionModalComponent, {
      width: '500px',
      data: null
    });

    dialogRef.componentInstance.saveInstitution.subscribe((institution: any) => {
      this.institutionService.addInstitution(institution).subscribe({
        next: () => {
          this.loadInstitutions();
          dialogRef.close();
        },
        error: (err: any) => {
          console.error('Erreur lors de l\'ajout de l\'institution', err);
        }
      });
    });

    dialogRef.componentInstance.closeModal.subscribe(() => {
      dialogRef.close();
    });
  }

  openEditModal(institution: any): void {
    const dialogRef = this.dialog.open(InstitutionModalComponent, {
      width: '500px',
      data: institution
    });

    dialogRef.componentInstance.saveInstitution.subscribe((updatedInstitution: any) => {
      this.institutionService.updateInstitution(updatedInstitution).subscribe({
        next: () => {
          this.loadInstitutions();
          dialogRef.close();
        },
        error: (err: any) => {
          console.error('Erreur lors de la mise à jour de l\'institution', err);
        }
      });
    });

    dialogRef.componentInstance.closeModal.subscribe(() => {
      dialogRef.close();
    });
  }

  getPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.institutions.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages() {
    return Math.ceil(this.institutions.length / this.itemsPerPage);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPaginationArray() {
    return new Array(this.getTotalPages()).fill(0).map((_, index) => index + 1);
  }
}
