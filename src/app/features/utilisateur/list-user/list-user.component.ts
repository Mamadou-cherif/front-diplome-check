import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { InstitutionService } from '../../institution/institution.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-list-user',
    imports: [CommonModule, NgxPaginationModule,FormsModule, MatDialogModule],
  standalone: true,
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent implements OnInit {
  users: any[] = [];
  institutions: any[] = [];
  page = 0;
  size = 10;
  totalPages = 1;
  showAddUserModal = false;
  addUser: any = {
    fullName: '',
    email: '',
    password: '1234', // mot de passe hardcodé
    institutionId: null,
    roles: []
  };

  editUserModel: any = null;

  constructor(
    private userService: UserService,
    private institutionService: InstitutionService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadInstitutions();
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.page, this.size).subscribe({
      next: (res) => {
        this.users = res.data.content || res.data || [];
        this.totalPages = res.data.totalPages || 1;
      },
      error: (err) => {
        // Gérer l'erreur ici (toast, console, etc.)
        console.error('Erreur lors du chargement des utilisateurs', err);
      }
    });
  }

  loadInstitutions() {
    this.institutionService.getInstitutions().subscribe({
      next: (res) => {
        this.institutions = res.data || res;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des institutions', err);
      }
    });
  }

  onPageChange(newPage: number) {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.page = newPage;
      this.loadUsers();
    }
  }

  openAddUserModal() {
    this.showAddUserModal = true;
    this.addUser = { fullName: '', email: '', password: '1234', institutionId: null, roles: [] };
  }

  closeAddUserModal() {
    this.showAddUserModal = false;
    this.editUserModel = null;
  }

  submitAddUser() {
    if (!this.addUser.fullName || !this.addUser.email  || !this.addUser.roles.length) return;
    if (this.editUserModel) {
      // Modification
      this.userService.updateUser(this.editUserModel.id, this.addUser).subscribe({
        next: () => {
          this.toastService.success('Utilisateur modifié avec succès');
          this.closeAddUserModal();
          this.loadUsers();
          this.editUserModel = null;
        },
        error: (err) => {
          console.error('Erreur lors de la modification de l\'utilisateur', err);
        }
      });
    } else {
      // Ajout
      this.userService.createUser(this.addUser).subscribe({
        next: () => {
          this.toastService.success('Utilisateur ajouté avec succès');
          this.closeAddUserModal();
          this.loadUsers();
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur', err);
        }
      });
    }
  }

  viewUser(user: any) {
    // Affiche les détails dans la console ou ouvre un modal de détails si besoin
    console.log('Voir utilisateur', user);
  }

  editUser(user: any) {
    
    this.editUserModel = { ...user, password: '1234' };
    this.addUser = { ...this.editUserModel };
    this.showAddUserModal = true;
  }

  async deleteUser(id: number) {
    const confirmed = await this.toastService.confirm({
      title: 'Supprimer cet utilisateur ?',
      text: 'Voulez-vous vraiment supprimer cet utilisateur ?',
      icon: 'warning',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non'
    });
    if (confirmed) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.toastService.success('Utilisateur supprimé avec succès');
          this.loadUsers();
        },
        error: (err) => {
          this.toastService.error('Erreur lors de la suppression de l\'utilisateur');
          console.error('Erreur lors de la suppression de l\'utilisateur', err);
        }
      });
    }
  }
}
