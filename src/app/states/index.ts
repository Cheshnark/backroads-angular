import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { userReducer } from "./user/user.reducer";
import { hydrationMetaReducer } from "./hydration/hydration.reducer";
import { AppState } from "../interfaces/stateInterfaces";


export const reducers: ActionReducerMap<AppState> = {
  user: userReducer
}

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer
]