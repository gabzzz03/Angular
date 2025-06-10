import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ActorComponent } from './pages/actor/actor.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent 
    },
    {
        path: 'account',
        component : AccountComponent,
    },
    {
        path:'movies/:movieId',
        component : MovieComponent
    },
    {
         path:'actors/:actorId',
        component : ActorComponent
    }

];
