import { createSelector } from "@ngrx/store";
import { AppState } from "../../interfaces/stateInterfaces";

export const selectUserState = (state:AppState) => state.user;

export const selectUser = createSelector(
  selectUserState,
  (state) => state.username
)