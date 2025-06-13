import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { MaintenanceComponent } from './Pages/other-pages/maintenance/maintenance.component';
import { ComingSoonComponent } from './Pages/other-pages/coming-soon/coming-soon.component';
import { Error404Component } from './Pages/other-pages/error-404/error-404.component';
import { Error500Component } from './Pages/other-pages/error-500/error-500.component';
import { Error503Component } from './Pages/other-pages/error-503/error-503.component';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password.component';
import { DefaultComponent } from './Pages/Dashboard/default/default.component';

import { ProjectComponent } from './Pages/Dashboard/project/project.component';
import { KanbanComponent } from './Pages/Apps/kanban/kanban.component';
import { EcommerceComponent } from './Pages/Dashboard/ecommerce/ecommerce.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';

export const routes: Routes = [

  //Auth
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   {
  path: 'accueil',
  component: LayoutsComponent,
  loadChildren: () =>
    import('./layouts/layout.route').then((mod) => mod.PAGE_ROUTES),
},

 {
  path: 'model',
  component: LayoutsComponent,
  loadChildren: () =>
    import('../app/features/model-diplome/model-diplome.route').then((mod) => mod.PAGE_ROUTES),
},

  ///{ path: '**', redirectTo: 'error-404' },

  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'error-500', component: Error500Component },
  { path: 'error-503', component: Error503Component },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },



   { path: 'dashboard', component: DefaultComponent },
    { path: 'project', component: ProjectComponent },
   { path: 'ecommerce', component: EcommerceComponent },
    // { path: 'chat', component: ChatComponent },
    // { path: 'contact', component: ContactComponent },
    // { path: 'invoice', component: InvoiceComponent },
    // { path: 'email', component: EmailComponent },
    // { path: 'calender', component: CalenderComponent },
    // { path: 'accordions', component: AccordionsComponent },
    // { path: 'alerts', component: AlertsComponent },
    // { path: 'avatar', component: AvatarComponent },
    // { path: 'badge', component: BadgeComponent },
    // { path: 'breadcrumb', component: BreadcrumbComponent },
    // { path: 'buttons', component: ButtonsComponent },
    // { path: 'buttonsgroup', component: ButtonsgroupComponent },
    // { path: 'carousel', component: CarouselComponent },
    // { path: 'clipboard', component: ClipboardComponent },
    // { path: 'counter', component: CounterComponent },
    // { path: 'countdown', component: CountdownComponent },
    // { path: 'dropdowns', component: DropdownsComponent },
    // { path: 'flatpickr', component: FlatpickrComponent },
    // { path: 'images', component: ImagesComponent },
    // { path: 'lightbox', component: LightboxComponent },
    // { path: 'loader', component: LoaderComponent },
    // { path: 'modals', component: ModalsComponent },
    // { path: 'notification', component: NotificationComponent },
    // { path: 'pagination', component: PaginationComponent },
    // { path: 'pricing', component: PricingComponent },
    // { path: 'progress-bar', component: ProgressBarComponent },
    // { path: 'tabs', component: TabsComponent },
    // { path: 'tooltips', component: TooltipsComponent },
    // { path: 'typography', component: TypographyComponent },
    // { path: 'videos', component: VideosComponent },
    // { path: 'chart', component: ChartComponent },
    // { path: 'icons', component: IconsComponent },
    // { path: 'dragdrop', component: DragDropComponent },
    // { path: 'basic', component: BasicComponent },
    // { path: 'checkbox', component: CheckboxComponent },
    // { path: 'editors', component: EditorsComponent },
    // { path: 'input-group', component: InputGroupComponent },
    // { path: 'radio', component: RadioComponent },
    // { path: 'switches', component: SwitchesComponent },
    // { path: 'validation', component: ValidationComponent },
    // { path: 'basic-table', component: BasictableComponent },
    // { path: 'data-table', component: DatatablesComponent },
    // { path: 'edit-table', component: EditablesComponent },
    // { path: 'profile', component: ProfileComponent },
    // { path: 'settings', component: SettingsComponent },
    // { path: 'blank', component: StarterPageComponent },
    // { path: 'gallery', component: GalleryComponent },
    { path: 'kanban', component: KanbanComponent }
];
