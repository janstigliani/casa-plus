import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeListComponent } from './components/homeList/homeList.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeListComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
  ];
