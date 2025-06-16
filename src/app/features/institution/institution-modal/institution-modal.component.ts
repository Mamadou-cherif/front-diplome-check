import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<InstitutionModalComponent>
  ) {

    
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
    // If data is provided, it means we are editing an existing institution
    this.institution = this.data || null;

    if (this.institution != null) {
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
