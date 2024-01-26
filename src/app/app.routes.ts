import { Routes } from '@angular/router';
import { HonorCodeComponent } from './honor-code/honor-code.component';
import { LocationComponent } from './location/location.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'honor-code',
    title: 'Honor Code',
    component: HonorCodeComponent
  },
  {
    path: 'location/:id',
    title: 'Location',
    component: LocationComponent
  },
  {
    path: 'map',
    title: 'Map',
    component: MapComponent
  },
  {
    path: 'faq',
    title: 'FAQ',
    component: FaqComponent
  },
  {
    path: 'profile',
    title: 'Profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Register',
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
