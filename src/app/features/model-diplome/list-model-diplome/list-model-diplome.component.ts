import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

// Fake data réaliste pour la table
const FAKE_DIPLOMA_MODELS = [
  {
    id: 1,
    institutionId: 1,
    modelName: 'Licence en Économie',
    fields: [
      { id: 1, fieldName: 'nom', fieldType: 'String', required: true },
      { id: 2, fieldName: 'prénoms', fieldType: 'String', required: true },
      { id: 3, fieldName: 'email', fieldType: 'String', required: true },
      { id: 4, fieldName: 'date de naissance', fieldType: 'String', required: true },
      { id: 5, fieldName: 'télephone', fieldType: 'String', required: true },
      { id: 6, fieldName: "année d'obtention", fieldType: 'String', required: true },
    ]
  },
  {
    id: 2,
    institutionId: 1,
    modelName: 'Doctorat en Médecine',
    fields: [
      { id: 7, fieldName: 'nom', fieldType: 'String', required: true },
      { id: 8, fieldName: 'prénoms', fieldType: 'String', required: true },
      { id: 9, fieldName: 'moyenne générale', fieldType: 'String', required: true },
      { id: 10, fieldName: 'mention', fieldType: 'String', required: false },
    ]
  },
  {
    id: 3,
    institutionId: 2,
    modelName: 'Master Informatique',
    fields: [
      { id: 11, fieldName: 'nom', fieldType: 'String', required: true },
      { id: 12, fieldName: 'prénoms', fieldType: 'String', required: true },
      { id: 13, fieldName: 'spécialité', fieldType: 'String', required: true },
      { id: 14, fieldName: 'année d\'obtention', fieldType: 'String', required: true },
    ]
  }
];

const FAKE_INSTITUTIONS = [
  { id: 1, name: 'Université de Conakry' },
  { id: 2, name: 'Université de Kankan' },
  { id: 3, name: 'Université de Labé' },
];

@Component({
  selector: 'app-list-model-diplome',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './list-model-diplome.component.html',
  styleUrl: './list-model-diplome.component.scss'
})
export class ListModelDiplomeComponent {
  tableData = FAKE_DIPLOMA_MODELS;
  institutions = FAKE_INSTITUTIONS;
  currentPage = 1;
  itemsPerPage = 10;

  showFieldsModal = false;
  selectedModel: any = null;

  showAddModal = false;
  addModel = {
    institutionId: null,
    modelName: '',
    fields: [] as any[]
  };

  getPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.tableData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages() {
    return Math.ceil(this.tableData.length / this.itemsPerPage);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
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

  openAddModal() {
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
    // Ajoute le nouveau modèle à la table (fake, à remplacer par appel API)
    this.tableData.unshift({
      ...this.addModel,
      id: Date.now(),
      institutionId: this.addModel.institutionId,
      fields: [...this.addModel.fields]
    });
    this.closeAddModal();
  }
}
