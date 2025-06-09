import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent 
    },
    {
        path: 'account',
        component : AccountComponent,
    }
];
