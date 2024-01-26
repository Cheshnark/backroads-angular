import { Routes } from '@angular/router';
import { HonorCodeComponent } from './honor-code/honor-code.component';
import { LocationComponent } from './location/location.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {path: 'honor-code', component: HonorCodeComponent},
  {path: 'location', component: LocationComponent},
  {path: 'map', component: MapComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];
