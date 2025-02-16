import { Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '**', component: NotFoundPageComponent },
];
