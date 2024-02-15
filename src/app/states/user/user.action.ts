import { createAction, props } from '@ngrx/store';

export const login = createAction('[User session] Login', props<{username:string | null}>());
export const register = createAction('[User session] Register', props<{username:string}>());
export const logout = createAction('[User session] Logout');