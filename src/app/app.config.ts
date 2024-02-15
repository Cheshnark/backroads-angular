import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { userReducer } from './states/user/user.reducer';
import { provideEffects } from '@ngrx/effects';
import { HydrationEffects } from './states/hydration/hydration.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({name: 'user', reducer: userReducer}),
    provideEffects([HydrationEffects])
  ]
};
