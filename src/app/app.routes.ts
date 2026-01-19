import { Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'blog',
    title: 'Blog',
    loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'projects',
    title: 'Projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'certificates',
    title: 'Certificates',
    loadComponent: () =>
      import('./features/certificates/certificates.component').then((m) => m.CertificatesComponent),
  },
  {
    path: 'private',
    title: 'Private',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/private/private.component').then((m) => m.PrivateComponent),
  },
  {
    path: 'garden',
    title: 'Garden',
    loadComponent: () =>
      import('./features/garden/garden.component').then((m) => m.GardenComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/components/page-not-found.component').then((m) => m.PageNotFoundComponent),
  },
];
