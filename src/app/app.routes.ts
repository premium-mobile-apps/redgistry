import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'tab5',
    loadComponent: () => import('./tab5/tab5.page').then( m => m.Tab5Page)
  },
  {
    path: 'student-profile',
    loadComponent: () => import('./student-profile/student-profile.page').then( m => m.StudentProfilePage)
  },
  {
    path: 'school-profile',
    loadComponent: () => import('./school-profile/school-profile.page').then( m => m.SchoolProfilePage)
  },
  {
    path: 'parent-profile',
    loadComponent: () => import('./parent-profile/parent-profile.page').then( m => m.ParentProfilePage)
  },
  {
    path: 'ai-card-detail',
    loadComponent: () => import('./ai-card-detail/ai-card-detail.page').then( m => m.AICardDetailPage)
  },
];
