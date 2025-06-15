import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-institution-modal',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './institution-modal.component.html',
  styleUrls: ['./institution-modal.component.scss']
})
export class InstitutionModalComponent implements OnInit {
  @Input() institution: any = null; // For editing an institution
  @Output() saveInstitution = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();

  institutionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.institutionForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      logoUrl: [''],
      active: [true]
    });
  }

  ngOnInit(): void {
    if (!this.institution) {
      console.error('Erreur : la variable institution est nulle dans InstitutionModalComponent');
    } else {
      this.institutionForm.patchValue(this.institution);
    }
  }

  save(): void {
    if (this.institutionForm.valid) {
      this.saveInstitution.emit(this.institutionForm.value);
    }
  }

  close(): void {
    this.closeModal.emit();
  }
}
