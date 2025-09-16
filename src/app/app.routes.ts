import { Routes } from '@angular/router';
import { Start } from './Pages/start/start';
import FaqComponent from './Pages/FAQ/faq';

export const routes: Routes = [
  {
    path: '',
    component: Start,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
];
