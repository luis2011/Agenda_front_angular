import { Routes } from '@angular/router';

export const routes: Routes = [
{
path: '',
  loadComponent: () => import('./contact-list/contact-list.component')

},

{
  path: 'new',
    loadComponent: () => import('./contact-form/contact-form.component')

  }

  ,

{
  path: ':id/edit',
    loadComponent: () => import('./contact-form/contact-form.component')

  }

];
