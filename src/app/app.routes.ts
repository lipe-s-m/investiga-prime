import { Routes } from '@angular/router';
import { Start } from './Pages/start/start';
import FaqComponent from './Pages/FAQ/faq';
import { Tutorial } from './Pages/tutorial/tutorial';

export const routes: Routes = [
  {
    path: '',
    component: Start,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'tutorial',
    component: Tutorial,
  },
];
