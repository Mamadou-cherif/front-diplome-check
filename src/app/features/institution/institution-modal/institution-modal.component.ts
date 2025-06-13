import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-institution-modal',
  templateUrl: './institution-modal.component.html',
  styleUrls: ['./institution-modal.component.scss']
})
export class InstitutionModalComponent {
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

  ngOnChanges(): void {
    if (this.institution) {
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
