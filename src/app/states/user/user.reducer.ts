import { createReducer, on } from "@ngrx/store";
import { UserState } from "../../interfaces/stateInterfaces";
import { login, logout, register } from "./user.action";

export const initialUserState:UserState = {
  username: null
};

export const userReducer = createReducer(
  initialUserState,
  on(login, (state, {username}) => ({...state, username: username})),
  on(register, (state, {username}) => ({...state, user: username})),
  on(logout, state => ({...state, user: null}))
);