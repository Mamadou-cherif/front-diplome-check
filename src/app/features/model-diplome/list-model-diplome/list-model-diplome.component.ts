import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModelDiplomeService } from '../model-diplome.service';
import { InstitutionService } from '../../institution/institution.service';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-list-model-diplome',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './list-model-diplome.component.html',
  styleUrl: './list-model-diplome.component.scss'
})
export class ListModelDiplomeComponent implements OnInit {
  tableData: any[] = [];
  institutions: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

  showFieldsModal = false;
  selectedModel: any = null;

  showAddModal = false;
  addModel = {
    institutionId: null,
    modelName: '',
    fields: [] as any[]
  };

  editModel: any = null;

  constructor(
    private modelDiplomeService: ModelDiplomeService,
    private institutionService: InstitutionService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDiplomaModels();
    // Vous pouvez charger les institutions ici si besoin via un service
    this.loadInstitutions();
  }


  public loadInstitutions(): void {
    this.institutionService.getInstitutions().subscribe({
      next: (response) => {
        this.institutions = response.data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des institutions', err);
      }
    });
  }
  loadDiplomaModels(): void {
    // L'API commence à la page 0, donc on soustrait 1 à currentPage
    this.modelDiplomeService.getDiplomaModels(this.currentPage - 1, this.itemsPerPage).subscribe({
      next: (response) => {
        this.tableData = response.data.content;
        this.totalPages = response.data.totalPages;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des modèles de diplômes', err);
      }
    });
  }

  getPaginatedData() {
    return this.tableData;
  }

  getTotalPages() {
    // Correction : si l'API ne retourne pas totalPages, le calculer localement
    if (this.totalPages && this.totalPages > 0) {
      return this.totalPages;
    }
    // Fallback dynamique si l'API ne fournit pas totalPages
    return Math.ceil((this.tableData?.length || 0) / this.itemsPerPage) || 1;
  }

  onPageChange(pageNumber: number) {
    if (pageNumber < 1 || pageNumber > this.getTotalPages()) return;
    this.currentPage = pageNumber;
    this.loadDiplomaModels();
  }

  getPaginationArray() {
    return new Array(this.getTotalPages()).fill(0).map((_, index) => index + 1);
  }

  openFieldsModal(model: any) {
    this.selectedModel = model;
    this.showFieldsModal = true;
  }

  closeFieldsModal() {
    this.showFieldsModal = false;
    this.selectedModel = null;
  }

  openAddAndUpdateModal() {
    this.showAddModal = true;
    this.addModel = {
      institutionId: null,
      modelName: '',
      fields: []
    };
  }

  openEditModal(model: any) {
    this.showAddModal = true;
    // Deep copy pour éviter la mutation directe
    this.addModel = JSON.parse(JSON.stringify(model));
    this.editModel = model;
  }

  async deleteModel(model: any) {
    const confirmed = await this.toastService.confirm({
      title: 'Supprimer ce modèle ?',
      text: `Voulez-vous vraiment supprimer le modèle "${model.modelName}" ?`,
      icon: 'warning',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non'
    });
    if (confirmed) {
      this.modelDiplomeService.deleteDiplomaModel(model.id).subscribe({
        next: () => {
          this.toastService.success('Modèle supprimé avec succès');
          this.loadDiplomaModels();
        },
        error: (err) => {
          this.toastService.error('Erreur lors de la suppression du modèle');
          console.error('Erreur lors de la suppression du modèle', err);
        }
      });
    }
  }

  submitAddModel() {
    if (!this.addModel.institutionId || !this.addModel.modelName || this.addModel.fields.length === 0) return;
    if (this.editModel) {
      // Modification
      this.modelDiplomeService.updateDiplomaModel(this.editModel.id, this.addModel).subscribe({
        next: () => {
          this.toastService.success('Modèle modifié avec succès');
          this.closeAddModal();
          this.loadDiplomaModels();
          this.editModel = null;
        },
        error: (err) => {
          this.toastService.error('Erreur lors de la modification du modèle');
          console.error('Erreur lors de la modification du modèle', err);
        }
      });
    } else {
      // Ajout
      this.modelDiplomeService.addDiplomaModel(this.addModel).subscribe({
        next: () => {
          this.toastService.success('Modèle ajouté avec succès');
          this.closeAddModal();
          this.loadDiplomaModels();
        },
        error: (err) => {
          this.toastService.error('Erreur lors de l\'ajout du modèle');
          console.error('Erreur lors de l\'ajout du modèle', err);
        }
      });
    }
  }

  closeAddModal() {
    this.showAddModal = false;
    this.editModel = null;
  }

  addFieldRow() {
    this.addModel.fields.push({ fieldName: '', fieldType: 'String', required: false });
  }

  removeFieldRow(index: number) {
    this.addModel.fields.splice(index, 1);
  }
}
