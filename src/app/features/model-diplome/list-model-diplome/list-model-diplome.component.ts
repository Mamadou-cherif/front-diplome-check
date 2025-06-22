import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModelDiplomeService } from '../model-diplome.service';
import { InstitutionService } from '../../institution/institution.service';

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

  constructor(
    private modelDiplomeService: ModelDiplomeService,
    private institutionService: InstitutionService // Assuming you have a service for institutions
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
    return this.totalPages;
  }

  onPageChange(pageNumber: number) {
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

  closeAddModal() {
    this.showAddModal = false;
  }

  addFieldRow() {
    this.addModel.fields.push({ fieldName: '', fieldType: 'String', required: false });
  }

  removeFieldRow(index: number) {
    this.addModel.fields.splice(index, 1);
  }

  submitAddModel() {
    if (!this.addModel.institutionId || !this.addModel.modelName || this.addModel.fields.length === 0) return;
    this.modelDiplomeService.addDiplomaModel(this.addModel).subscribe({
      next: () => {
        this.closeAddModal();
        this.loadDiplomaModels();
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du modèle', err);
      }
    });
  }
}
