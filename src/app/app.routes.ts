import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'loggin',loadComponent: () =>
      import('./components/student-loggin/student-loggin.component').then((r) => r.StudentLogginComponent),
  },
  {path:'student-info',loadComponent: () =>
      import('./components/student-layout/student-layout.component').then((r) => r.StudentLayoutComponent),
  },
  {path:'',redirectTo:'loggin',pathMatch:'prefix'}
];
