import { Component, OnInit } from '@angular/core';
import { DiplomeService } from '../diplome.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InstitutionService } from '../../institution/institution.service';
import { ModelDiplomeService } from '../../model-diplome/model-diplome.service';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-list-diplomes',
  imports: [CommonModule, NgxPaginationModule, FormsModule, MatDialogModule],
  standalone: true,
  templateUrl: './list-diplomes.component.html',
  styleUrl: './list-diplomes.component.scss'
})
export class ListDiplomesComponent implements OnInit {
  diplomes: any[] = [];
  institutions: any[] = [];
  allModels: any[] = [];
  filteredModels: any[] = [];
  modelFields: any[] = [];
  page = 0;
  size = 10;
  totalPages = 1;
  totalElements = 0;

  filter = {
    registrationNumber: '',
    nom: '',
    prenoms: '',
    email: '',
    anneeObtention: ''
  };

  showAddDiplomeModal = false;
  addMode: 'unique' | 'import' = 'unique';
  addDiplome: any = {
    registrationNumber: '',
    diplomaModelId: null,
    institutionId: null,
    fields: [
      { fieldName: '', fieldValue: '' }
    ]
  };
  importModelId: number | null = null;
  importInstitutionId: number | null = null;
  importFile: File | null = null;
  importFilteredModels: any[] = [];

  constructor(
    private diplomeService: DiplomeService,
    private institutionService: InstitutionService,
    private modelDiplomeService: ModelDiplomeService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDiplomes();
    this.loadInstitutions();
    this.loadAllModels();
  }

  applyFilters() {
    this.page = 0;
    this.loadDiplomes();
  }

  loadDiplomes() {
    let params: any = { page: this.page, size: this.size };
    if (this.filter.registrationNumber) params.registrationNumber = this.filter.registrationNumber;
    if (this.filter.nom) params['fields.nom'] = this.filter.nom;
    if (this.filter.prenoms) params['fields.prénoms'] = this.filter.prenoms;
    if (this.filter.email) params['fields.email'] = this.filter.email;
    if (this.filter.anneeObtention) params['fields.année d\'obtention'] = this.filter.anneeObtention;

    this.diplomeService.getDiplomasWithParams(params).subscribe({
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

  loadInstitutions() {
    this.institutionService.getInstitutions().subscribe({
      next: (res) => {
        this.institutions = res.data || [];
      },
      error: (err) => {
        console.error('Erreur lors du chargement des institutions', err);
        this
      }
    });
  }

  loadAllModels() {
    // On charge tous les modèles pour filtrer côté client
    this.modelDiplomeService.getDiplomaModels(0, 1000).subscribe({
      next: (res) => {
        this.allModels = res.data.content || [];
      },
      error: (err) => {
        console.error('Erreur lors du chargement des modèles', err);
        this.toastService.error('Erreur lors du chargement des modèles de diplômes');
      }
    });
  }

  onInstitutionChange() {
    this.filteredModels = [];
    this.addDiplome.diplomaModelId = null;
    this.modelFields = [];
    this.addDiplome.fields = [];
    if (this.addDiplome.institutionId) {
      this.modelDiplomeService.getModelsByInstitutionId(this.addDiplome.institutionId).subscribe({
        next: (res) => {
          this.filteredModels = res.data || [];
        },
        error: (err) => {
          console.error('Erreur lors du chargement des modèles pour l\'institution', err);
          this.toastService.error('Erreur lors du chargement des modèles de diplômes pour l\'institution');
        }
      });
    }
  }

  onModelChange() {
    const selectedModel = this.filteredModels.find(m => m.id == this.addDiplome.diplomaModelId);
    if (selectedModel && selectedModel.fields) {
      this.modelFields = selectedModel.fields;
      // Réinitialise les champs du diplôme en gardant registrationNumber distinct
      this.addDiplome.fields = this.modelFields.map((f: any) => ({ fieldName: f.fieldName, fieldValue: '' }));
    } else {
      this.modelFields = [];
      this.addDiplome.fields = [];
    }
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

  openAddDiplomeModal() {
    this.showAddDiplomeModal = true;
    this.addMode = 'unique';
    this.addDiplome = {
      registrationNumber: '',
      diplomaModelId: null,
      institutionId: null,
      fields: [ { fieldName: '', fieldValue: '' } ]
    };
    this.importInstitutionId = null;
    this.importModelId = null;
    this.importFilteredModels = [];
    this.importFile = null;
  }

  closeAddDiplomeModal() {
    this.showAddDiplomeModal = false;
  }

  addFieldRow() {
    this.addDiplome.fields.push({ fieldName: '', fieldValue: '' });
  }

  removeFieldRow(i: number) {
    this.addDiplome.fields.splice(i, 1);
  }

  submitAddDiplome() {
    if (this.addMode === 'unique') {
      if (!this.addDiplome.registrationNumber || !this.addDiplome.diplomaModelId || this.addDiplome.fields.length === 0) return;
      // Construction de l'objet à envoyer : registrationNumber à la racine, fields pour le reste
      const payload = {
        registrationNumber: this.addDiplome.registrationNumber,
        diplomaModelId: this.addDiplome.diplomaModelId,
        institutionId: this.addDiplome.institutionId,
        fields: this.addDiplome.fields
      };
      this.diplomeService.createDiploma(payload).subscribe({
        next: () => {
          this.closeAddDiplomeModal();
          this
          this.loadDiplomes();
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du diplôme', err);
          this.toastService.error('Erreur lors de l\'ajout du diplôme');
        }
      });
    } else if (this.addMode === 'import') {
      if (!this.importFile || !this.importModelId) return;
      this.diplomeService.importDiplomas(this.importFile, this.importModelId).subscribe({
        next: () => {
          this.closeAddDiplomeModal();
          this.toastService
          this.loadDiplomes();
        },
        error: (err) => {
          console.error('Erreur lors de l\'importation', err);
          this.toastService.error('Erreur lors de l\'importation');
        }
      });
    }
  }

  onImportInstitutionChange() {
    this.importFilteredModels = [];
    this.importModelId = null;
    if (this.importInstitutionId) {
      this.modelDiplomeService.getModelsByInstitutionId(this.importInstitutionId).subscribe({
        next: (res) => {
          this.importFilteredModels = res.data || [];
        },
        error: (err) => {
          console.error('Erreur lors du chargement des modèles pour l\'import institution', err);
        }
      });
    }
  }

  onImportFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      this.importFile = input.files[0];
    } else {
      this.importFile = null;
    }
  }
}
