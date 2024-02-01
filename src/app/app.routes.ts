import { Routes } from '@angular/router';
import { HonorCodeComponent } from './honor-code/honor-code.component';
import { LocationComponent } from './location/location.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Backroads - Home',
    component: HomeComponent
  },
  {
    path: 'honor-code',
    title: 'Backroads - Honor Code',
    component: HonorCodeComponent
  },
  {
    path: 'location/:id',
    title: 'Backroads - Location',
    component: LocationComponent
  },
  {
    path: 'map',
    title: 'Backroads - Map',
    component: MapComponent
  },
  {
    path: 'faq',
    title: 'Backroads - FAQ',
    component: FaqComponent
  },
  {
    path: 'profile',
    title: 'Backroads - Profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    title: 'Backroads - Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Backroads - Register',
    component: RegisterComponent
  },
  { 
    path: '**',
    component: NotFoundComponent
  }
  // {
  //   path: '',
  //   redirectTo:'login',
  //   pathMatch: 'full'
  // }
];
