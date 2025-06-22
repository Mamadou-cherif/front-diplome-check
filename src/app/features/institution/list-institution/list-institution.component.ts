import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { InstitutionService } from '../institution.service';
import { InstitutionModalComponent } from '../institution-modal/institution-modal.component';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-list-institution',
  imports: [CommonModule, NgxPaginationModule, MatDialogModule],
  standalone: true,
  templateUrl: './list-institution.component.html',
  styleUrls: ['./list-institution.component.scss']
})
export class ListInstitutionComponent implements OnInit {
  institutions: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  action=''

  constructor(
    private _toastService: ToastService,
    private institutionService: InstitutionService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadInstitutions();
  }

  loadInstitutions(): void {

    this.institutionService.getInstitutions().subscribe({
      next: (response: { success: boolean; data: any[] }) => {
        if (response.success) {
          this.institutions = response.data;
        }
        else{
           this._toastService.error('Erreur lors du chargement des institutions');
        }
      },
      error: (err: any) => {
        this._toastService.error('Erreur lors du chargement des institutions');
        console.error('Erreur lors du chargement des institutions', err);}
    });
  }

  openAddAndUpdateModal(): void {
    const dialogRef = this.dialog.open(InstitutionModalComponent, {
      width: '500px',
      data: null
    });

    dialogRef.componentInstance.saveInstitution.subscribe((institution: any) => {

      if (institution?.id === '') {
              console.log('Saving institution:', institution);

        this.institutionService.addInstitution(institution).subscribe({
          next: (data: any) => {
           if(data?.success){
            this.loadInstitutions();
            this._toastService.success('Institution ajoutée avec succès');
           }
           else {
            this._toastService.error('Erreur lors de l\'ajout de l\'institution');
           }
            
           dialogRef.close();
          },
          error: (err: any) => {
              this._toastService.error('Erreur lors de l\'ajout de l\'institution');
            console.error('Erreur lors de l\'ajout de l\'institution', err);
          }
        });
      }
      else {
        this.institutionService.updateInstitution(institution).subscribe({
          next: (data) => {
            if(data?.success){
               this.loadInstitutions();
               this._toastService.success('Institution mise à jour avec succès');
            }
            else {
              this._toastService.error('Erreur lors de la mise à jour de l\'institution');
            }
           dialogRef.close();
          },
          error: (err: any) => {
            this._toastService.error('Erreur lors de la mise à jour de l\'institution');
            console.error('Erreur lors de la mise à jour de l\'institution', err);
          }
        });
      }
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
        next: (data) => {
          if(data?.success){
              this.loadInstitutions();
          this._toastService.success('Institution mise à jour avec succès');
          }
          else{
          this._toastService.error('Erreur lors de la mise à jour de l\'institution');
          }
        dialogRef.close();
        },
        error: (err: any) => {
          this._toastService.error('Erreur lors de la mise à jour de l\'institution');
          console.error('Erreur lors de la mise à jour de l\'institution', err);
        }
      });
    });

    dialogRef.componentInstance.closeModal.subscribe(() => {
      dialogRef.close();
    });
  }

  getPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.institutions.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages(): number {
    return Math.ceil(this.institutions.length / this.itemsPerPage);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPaginationArray() {
    return new Array(this.getTotalPages()).fill(0).map((_, index) => index + 1);
  }

  viewDetails(institution: any): void {
    

    const dialogRef = this.dialog.open(InstitutionModalComponent, {
      width: '500px',
      data: {institution, viewOnly: true}
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

  }

  async deleteInstitution(id: number): Promise<void> {
    const confirmed = await this._toastService.confirm({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible !',
      icon: 'warning',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non'
    });

    if (confirmed) {
      this.institutionService.deleteInstitution(id).subscribe({
        next: (data) => {
          if(data.success){
            this._toastService.success('Institution supprimée avec succès');
            this.loadInstitutions();
          }
          else{
            this._toastService.error('Erreur lors de la suppression de l\'institution');
          }
        },
        error: (err: any) => {
          this._toastService.error('Erreur lors de la suppression de l\'institution');
          console.error('Erreur lors de la suppression de l\'institution', err);
        }
      });
    }
  }
}
