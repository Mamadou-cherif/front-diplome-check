import { Routes } from '@angular/router';
import { ListModelDiplomeComponent } from './list-model-diplome/list-model-diplome.component';


export const PAGE_ROUTES: Routes = [
    { path: '', redirectTo: 'model-diplome', pathMatch: 'full' },
  { path: 'model-diplome', component: ListModelDiplomeComponent },

];

